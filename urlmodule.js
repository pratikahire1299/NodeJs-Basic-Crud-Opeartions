import url from 'url';
//const urll=require("url");

const myurl=new URL("https://w3school.org");
myurl.pathname="a/b/c";
myurl.search="?d=e";

console.log(myurl)
console.log(myurl.pathname)
console.log(myurl.href)
