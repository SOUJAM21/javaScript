var person = {}
person.name = "Sourabh"
person.age = 16;

var homeAddress = {}
homeAddress.addressLineOne = "17003 NW tucson street"
homeAddress.city = "beaverton"
homeAddress.state = "OR"
homeAddress.zip = 97006

var workAddress = {}
workAddress.addressLineOne = "18553 SW johnson street"
workAddress.city = "gresham"
workAddress.state = "NY"
workAddress.zip = 84252

console.log(person)

person.homeAddress = homeAddress

person.workAddress = workAddress

console.log(person)