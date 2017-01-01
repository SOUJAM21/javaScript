//Displaying Options
var ps = require("./PersonManager")
var persons = ps.load("PartyList.txt");

var m = require("./Menu")
var Menu = m.showOptions();


//variable for option 4(adding name)
var addName = "Jim"

//variable for option 2(finding user)
var searchName = "Sruti"

//Choosing Menu Option
var userInput = 2



//View Users
if(userInput==1){
    console.log(ps.getPersons())
}



//find Users
if(userInput==2){
  var p = ps.findPerson(searchName);
  if(p == null){
      console.log("Contact not found")
  }
  else{
      console.log(p)
  }
}



//Quit Program
if(userInput==3){
    console.log("Program has stopped!!!")
}




//Adding User
if(userInput==4){
    ps.addPerson("bob",53)
    console.log(ps.getPersons())
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