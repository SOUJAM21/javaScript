function findPerson(fileName,searchName){
 
    
    var found = false;
    
    var fs = require("fs")
    var info = fs.readFileSync(fileName, "utf-8")



    var lines = info.toString().split('\n')

    var persons = []
    for(var x = 0; x<lines.length; x++){
        var person = lines[x]
      
    
        persons.push(person)
        
         if(searchName == persons[x]){
           found = true;
      }
      
     
    }

     if(found==true){
           console.log("FOUND " + searchName + " In Party List" )
    }
    else if(found==false){
        console.log("Could not find in List")
    }
}

module.exports.findPerson = findPerson;