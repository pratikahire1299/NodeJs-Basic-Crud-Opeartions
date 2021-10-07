
console.log("Hello World")
const dt=require("./coockies.js");
console.log("Hello world",dt)   


const os=require('os');
console.log(os.freemem());
console.log(os.hostname());
console.log(os.release());
console.log(os.platform());


const pt=require('path');
console.log(pt.basename("C:\\programs"));
console.log(pt.dirname("C:\\programs"));


const fs=require('fs');