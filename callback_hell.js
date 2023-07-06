function print(i){
    window.alert("This is call number "+i);
}

function fun1(callback){
    setTimeout(()=>{
    
        let i = 1 ;
 	   callback(i); i++ ;
 	   setTimeout(()=>{
        console.log("this is 1st call")
        
      	    callback(i); i++;
      	    setTimeout(()=>{
                console.log("this is 2nd call");
    	
        	    callback(i); i++ ;
        	    setTimeout(()=>{
                    console.log("this is 3rd call")
      	
          		    callback(i); i++ ;
          		    setTimeout(()=>{
                        console.log("this is 4th call")
        	
            		    callback(i); i++ ;
            		    // .... and so on
            		    
          		    }, 1000)
        	    }, 700)
      	    }, 6000)
 	   }, 300)
    }, 800)
}

// Calling fun1 with print function as parameter
fun1(print);
