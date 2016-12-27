var num1 = 5;
var num2 = 10;
	
   var GCF = getGCF(num1,num2);
	
	console.log("The GCF is: " + GCF)
	
	function getGCF(num1,num2){
	   var max = Math.max(num1,num2)
	   var min = Math.min(num1,num2)
	  
		if(max%min == 0){
			return min;
		}
		else{
			for(var i=min;i>=2;i--){
				if(max%i==0 && min%i==0){
					return i;
				}
			}
		}
	}
