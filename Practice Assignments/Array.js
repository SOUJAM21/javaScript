var num = [1,2,3,4,5,6,7,8,9,10]
console.log(num)

for (var i=0; i<num.length;i++){
    if(isOdd(num[i])){
      //  console.log(num[i])
    }
}

function isOdd(x){
    return x%2 ==1;
}

var newNumbers = num.filter(isOdd)

//console.log(newNumbers)


var newNumbers = num.filter( function(x){
    return x%2 == 1
} )

console.log(newNumbers)

var newNumbers = num.filter( function(x){
    return x%2 == 0
} )

console.log(newNumbers)

