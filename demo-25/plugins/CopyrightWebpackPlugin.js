class CopyrightWebpackPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      'CopyrightWebpackPlugin',
      (compilation, callback) => {
        console.log('This is an example plugin!');
        callback();
      }
    )
  }
}

module.exports = CopyrightWebpackPlugin;