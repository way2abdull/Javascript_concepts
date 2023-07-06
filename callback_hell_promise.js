// var DidPayment = true;

// function message(){
//     console.log("Payment Successful");
// }

// function UserPayment(DidPayment, callback){
  
//     if(DidPayment){
//  	   callback();
//     }else{
//  	   UserPayment();
//  	   if(DidPayment){
//    	     callback();
//  	   }else{
//    	     UserPayment();
//    	     if(Didpayment){
//      	       callback();
//    	     }else{
//      	       UserPayment();
//      	       //... And so on 
//    	     }
//  	   }
//     }
// }

// // Making the call
// UserPayment(DidPayment, message);


const myPromise = new Promise((resolve, reject) => {  
    let didPayment = false;  
    
    if(didPayment) {    
        resolve('Promise is resolved successfully.');  
        console.log("Status: ok");
    } else {    
        reject('Promise is rejected');
        console.log("fail");  
    }
});
myPromise.then((message) => { 
    console.log("Succes");
}).catch((message) => { 
    console.log("error");
});