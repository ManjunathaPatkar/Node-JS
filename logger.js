var url='https://somewebsite name.com/log';
const Emmiterclass=require('events');
// const emitter=new emmiterclass();
class Logger extends Emmiterclass{
    log(message) {
        //we will send HTTP request here
        console.log(message);
        this.emit('messageLogged',{id:1,url:'http://faegauofj'});
    }
}

// module.exports.URL=url;
// module.exports.log=log;
module.exports=Logger;

