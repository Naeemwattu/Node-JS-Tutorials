const http = require("http");
const fs = require("fs");

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync("./index.html");
const about = fs.readFileSync("./about.html");
const courses = fs.readFileSync("./courses.html");
const blog = fs.readFileSync("./blog.html");
const Contact = fs.readFileSync("./Contact.html");
const stylee = fs.readFileSync("./stylee.css");

const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
    if (url=="/") {
        res.end(home);
    } else if(url == "/about"){
        res.end(about);
    } else if(url == "/courses"){
        res.end(courses);
    } else if(url == "/blog"){
        res.end(blog);
    } else if(url == "/Contact"){
        res.end(Contact)
    } else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>")
    }

});


server.listen(port,hostname, ()=>{
    console.log(`Server Running at http://${hostname}:${port}/`);
})