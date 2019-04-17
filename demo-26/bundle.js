const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const babel = require('@babel/core');

const moduleAnalyser = (filename) => {
  const content = fs.readFileSync(filename, 'utf-8');
  const ast = parser.parse(content, {
    sourceType: 'module'
  });
  const dependencies = {};

  traverse(ast, {
    ImportDeclaration: function({node}) {
      const dirname = path.dirname(filename);
      const newFile = './' + path.join(dirname, node.source.value);
      dependencies[node.source.value] = newFile;
    }
  });
  const {code} = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env']
  });
  return {
    filename,
    dependencies,
    code
  }

}

const analyseDependencyGraph = (entry) => {
  const analyzedModule = moduleAnalyser(entry);
  let modules = [analyzedModule];
  let graph = {};
  for (let i = 0; i < modules.length; i++) {
    let dependencies = modules[i].dependencies;

    for(let item in dependencies) {
      modules.push(moduleAnalyser(dependencies[item]))
    }
  }
  modules.forEach(item => {
    graph[item.filename] = {
      dependencies: item.dependencies,
      code: item.code
    };
  });
  return graph;
}
 

const result = analyseDependencyGraph('./src/index.js');
console.log(result);