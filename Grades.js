var person1 = {}
person1.name = "Sourabh"
person1.grade = 30
//adding function (not calling)
person1.getGrade = getGrade

var person2 = {}
person2.name = "Sai"
person2.grade = 95
person2.getGrade = getGrade

var person3= {}
person3.name = "Sruti"
person3.grade = 78
person3.getGrade = getGrade


console.log(person1.name + " has a " + person1.getGrade())
console.log(person2.name + " has a " + person2.getGrade())
console.log(person3.name + " has a " + person3.getGrade())


function getGrade(){
     var grade
    
     if(this.grade<50){
        return "D"
    }
       if(this.grade>90){
        return "A"
    }
    else{
        return "B"
    }
    
}