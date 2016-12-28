function getPersons(fileName){
    var fs = require("fs")
    var info = fs.readFileSync(fileName, "utf-8")



    var lines = info.toString().split('\n')

    var persons = []
    for(var x = 0; x<lines.length; x++){
         var person = {}
         var parts = lines[x].split(" ")
         person.name = parts[0]
         person.age = parts[1]
    
        persons.push(person)
    }
    return persons;
}

module.exports.getPersons = getPersons;

