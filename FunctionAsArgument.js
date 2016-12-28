function add(x,y){
    return x+y
}

function multiply(x,y){
    return x*y
}

function subtract(x,y){
    return x-y
}


function doMath(x,y,operation){
     return operation(x,y)
}


console.log(doMath(2,3,add))
console.log(doMath(2,3,multiply))
console.log(doMath(2,3,subtract))
