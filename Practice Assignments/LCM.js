   var num1 = 4;
   var num2 = 10;
	
	var LCM = getLCM(num1,num2)
	
	console.log("LCM is: " + LCM)
	
	
function getLCM( num1, num2){
  var max = Math.max(num1,num2)
  var min = Math.min(num1,num2)
 
		
		if(max%min==0){
			return max;
		}	
		
		
		
		else{
			for(var i=max;;i++)
			   {
					if(i%max==0 && i%min==0){
						return i;
					}
			   }
	}
		
	}
