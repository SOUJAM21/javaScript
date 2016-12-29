//Displaying Options
var ps = require("./Menu")
var Menu = ps.showOptions();



var addName = "Meghana"

var userInput = 4

if(userInput==1){
    var ps = require("./PersonManager")
    var persons = ps.getPersons("PartyList.txt");

    console.log(persons)

}

if(userInput==3){
    console.log("Program has stopped!!!")
}

if(userInput==4){
    var ps = require("./PersonManager")
    ps.addPerson(addName);
}








