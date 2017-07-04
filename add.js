var fs = require("fs")


var info = fs.readFileSync('test.txt', "utf-8")


console.log(info);