
var persons = [];


function load(fileName){
    var fs = require("fs")
    var info = fs.readFileSync(fileName, "utf-8")



    var lines = info.toString().split('\n')

    for(var x = 0; x<lines.length; x++){
        var personLine = lines[x]
        
         var parts = personLine.toString().split(' ')
     
     var person = {};
     
      person.name = parts[0]
     person.age = parts[1]
    
        persons.push(person)
    }
    return persons;
}

function getPersons(){
    return persons
}
	
	

function addPerson(name,age) {
	var p = {};
	p.name = name;
	p.age = age;
	
	persons.push(p.name,p.age)

}

function findPerson(searchName){
    for(var i=0;i<persons.length;i++){
       // console.log(persons[i].name)
       
        if(persons[i].name == searchName){
            return persons[i]
        }
    }
    
    return null;
    
}

function deletePerson(deleteName){
        for(var i=0;i<persons.length;i++){
       // console.log(persons[i].name)
       
        if(persons[i].name == deleteName){
            persons.pop()
        }
    }
    
    return null;
    
}

module.exports.load = load
module.exports.addPerson = addPerson;
module.exports.getPersons = getPersons;
module.exports.findPerson = findPerson;