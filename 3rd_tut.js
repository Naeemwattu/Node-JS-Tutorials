const fs = require("fs");
fs.readFile("txt.txt", (err,data)=>{
    console.log(data)
});

console.log("This is a Message");