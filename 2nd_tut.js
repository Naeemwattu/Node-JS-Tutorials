const fs = require("fs");
let file = fs.readFileSync("txt.txt", "utf-8");

file = file.replace("Naeem", "Nomi");

console.log("The Content iof file is...");
console.log(file);

console.log("Creating a New File..");
fs.writeFileSync("3rd_tut.txt", file);

fs.writeFileSync("3rd_tut.js", file);
fs.renameSync("3rd_tut.txt", "4th_tut.js");

