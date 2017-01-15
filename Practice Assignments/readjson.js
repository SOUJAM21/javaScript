var fs  = require("fs")
var data = fs.readFileSync("Persons.json")

var person = JSON.parse(data)

console.log(person)