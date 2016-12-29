	
console.log(showOptions())

var userInput = 1

if(userInput==1){
    var persons = getPersons("PartyList.txt");

    console.log(persons)

}


function showOptions(){
		 console.log("Choose Option") 
		 console.log("1:View")
		 console.log("2:Find")
		 console.log("3:Quit")
		  console.log("4:Add")
		   console.log("5:Delete")
	}


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
