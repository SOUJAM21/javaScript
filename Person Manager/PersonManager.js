function getPersons(fileName){
    var fs = require("fs")
    var info = fs.readFileSync(fileName, "utf-8")



    var lines = info.toString().split('\n')

    var persons = []
    for(var x = 0; x<lines.length; x++){
        var person = lines[x]
    
        persons.push(person)
    }
    return persons;
}

	module.exports.getPersons = getPersons;
	
	
function addPerson(name){
    var fs = require('fs');
    fs.appendFile("PartyList.txt", name + "\n" , function(fr) {
    if(fr) {
        return console.log(fr)
    }

    console.log("The file was saved!");
});
}

	module.exports.addPerson = addPerson;