import  fs from "fs";
import  http  from "http";

const port = process.env.PORT || 1299;

const server  = http.createServer((req, res)=>{
    
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html'); 
        res.end(data.toString());
    }
   
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> About This Website : Author: Pratik Ahire</h1> ');
    } 
    else{

        res.statusCode = 404;
        res.end('<h1> Not Found</h1> <p> PAGE NOT FOUND</p>');
    }
    
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);

});