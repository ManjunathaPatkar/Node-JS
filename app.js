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
// const os=require('os');
// var totalmem=os.totalmem();
// var freemme=os.freemem();
// // console.log(totalmem);
// // console.log(freemme);
// //using template string to print
// console.log(`total memeory ${totalmem}`);
// console.log(`free memory ${freemme}`);
// const fs=require('fs');
// const fils=fs.readdirSync('./');
// // console.log(fils);
// console.log(`${fils}`);
// fs.readdir('./',function (err,result){
//  if(err){
//      console.log(err);
//  }
//  else{
//      console.log(result);
//  }
//
// })
// fs.readdir('./wffasdf',function (err,result) {//with error
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// })
// const EventEmitter=require('events');//event emitter is a class so upper case then using class we need to intiantiate it to use it since it is not an object.
// const emitter=new EventEmitter();
//registering a listener
// const log=require('./logger');
// log.log("hello bro");
// const Logger=require('./logger')
// const logger=new Logger();
//
// logger.on('messageLogged', (arguments)=> {
//     console.log("Listener called",arguments);
// })
// logger.log('hello bro');
// //raised an event now we should listener to raise this
// // emitter.emit('messageLogged',{id:1,url:'http://faegauofj'});
const http=require('http');
const server=http.createServer((req,res)=>{
    if (req.url=='/'){
        res.write('Hello world');
        res.end();
    }
    if(req.url==='/couses/free'){
        res.write(JSON.stringify(['christoper nolan','jack sparow','prestige']));
        res.end();
    }
});
// server.on('connection',(socket)=>{
//     console.log("new connection",socket);
// })
server.listen(3000);
console.log("Listening on port 3000........");
