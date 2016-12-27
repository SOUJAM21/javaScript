var person = {}
console.log(person)
person.name = "Sourabh"
person.age = 16;

console.log(person.name)
person.email = "sourabh.jamalapuram@gmail.com"
console.log(person.age)
console.log(person.email)

person.happyBirthday = function(){
    this.age++
}

person.happyBirthday()
console.log(person.age)

person.happyBirthday()
console.log(person.age)