//Displaying Options
var ps = require("./Menu")
var Menu = ps.showOptions();


//variable for option 4(adding name)
var addName = "Jim"

//variable for option 2(finding user)
var searchName = "Bob"

//Choosing Menu Option
var userInput = 4




//View Users
if(userInput==1){
    var ps = require("./PersonManager")
    var persons = ps.getPersons("PartyList.txt");

    console.log(persons)
}



//find Users
if(userInput==2){
   var ps = require("./UI")
   ps.findPerson("PartyList.txt", searchName)
  
}



//Quit Program
if(userInput==3){
    console.log("Program has stopped!!!")
}




//Adding User
if(userInput==4){
    var ps = require("./PersonManager")
    ps.addPerson(addName);
}

/**
if(userInput==5){
   var  deleteName = "Meghana"
   deletePerson("PartyList.txt", deleteName)
}
*/


/**
function deletePerson(fileName,deleteName){
 
    
    var found = false;
    
    var fs = require("fs")
    var info = fs.readFileSync(fileName, "utf-8")


    var lines = info.toString().split('\n')

    var persons = []
    for(var x = 0; x<lines.length; x++){
        var person = lines[x]
      
        persons.push(person)
        
         if(deleteName == persons[x]){
           found = true;
      }
      
     
    }

     if(found==true){
           console.log("FOUND " + deleteName + " In Party List" )
           var fs = require('fs')
           fs.truncate(fileName, 0, function(){console.log(deleteName)})
    }
    else if(found==false){
        console.log("Could not find in List")
    }
}


 */
