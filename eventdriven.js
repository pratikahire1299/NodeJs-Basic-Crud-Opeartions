import EventEmitter from 'events';


class MyEmitter extends EventEmitter{}

const me= new MyEmitter();

me.on('ShutDown',()=>{
        console.log("Pc will shut down in 5 secs");
        setTimeout(()=>{
            console.log("Shutting  Down ");
        },5000);
})
console.log("Turn on pc");
console.log("Pc is On");
setTimeout(()=>{
    me.emit('ShutDown');
},8000);




