// import {file, parse} from './globals.js';
const {file, parse} = require('./globals.js'); 

console.log(file);
parse();

console.log(this === window);