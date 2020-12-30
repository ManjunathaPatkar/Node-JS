// function sayhello(name) {
// console.log("Hello "+name);
// }
// // sayhello("Manja");
// // sayhello("Patkar");
// // sayhello("Macbook");
// // sayhello("Air");
// console.log(window);
// var a="manja";
// console.log(global.message);//variabes are not global so we get undefined as output
// console.log(module);
// const logger=require('./logger.js');
// console.log(logger);
// logger.log('manja');
// const path=require('path');
// var pathobj=path.parse(__filename);
// console.log(pathobj);
const os=require('os');
var totalmem=os.totalmem();
var freemme=os.freemem();
// console.log(totalmem);
// console.log(freemme);
//using template string to print
console.log(`total memeory ${totalmem}`);
console.log(`free memory ${freemme}`);