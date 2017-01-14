var fs  = require("fs")
var data = fs.readFileSync("Persons.json")

var person = JSON.parse(data)


	var p = {};
	p.name = "Tim";
	p.age = 83;
	
	person.push(p)
	
	console.log(person)
	
	var personsData = JSON.stringify(person, '', 4)
	
	fs.writeFileSync("Persons.json",personsData)