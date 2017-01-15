var person = {}
person.name = "Sourabh"
person.age = 16

console.log(person)
var val = JSON.stringify(person,'',4)

console.log(val)

var person2  = JSON.parse(val)

console.log(person2)
