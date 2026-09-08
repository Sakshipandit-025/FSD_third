<<<<<<< HEAD
console.log("Helloiii")
=======

console.log("xyz");
// function sum(a,b){
//     return Math.sqrt(a) + Math.sqrt(b);
// }
//FUNCTION AS AN EXPRESSION : 
// const sum=function (a,b){
//     return Math.sqrt(a) + Math.sqrt(b);
// }
//ARROW FUNCTION:
const sum=(a,b)=> {return a+b};
const res= sum(16,25);
console.log(res);
//IIFE= Immediately Invoked Function Expression.
(()=>{
console.log("Using IIFE");
})();
//var is function scoped, let is block scoped
var a= 23;
console.log(typeof(a));
// if(a<30){
//     var a=40;
//     console.log("value of a inside block is " + a );
// }
// console.log("value of a outside block is " + a );
if(a<30){
    let a=40;
    console.log("value of a inside block is " + a );
}
console.log("value of a outside block is " + a );

//CALLBACK: 
function fun2(a,b){
    return a+b;
}
function msgWithSum(clbk, msg){
    const result = clbk(48,50);
    console.log("Hi "+ msg + " your result is "+ result);
}
msgWithSum(fun2, "saksh");
function login(error,msg){
    if(error){
        console.log("Error is " + error);
    }
    else 
        console.log(msg);
}
function logInHandler(username, password, clbk){
    if(username=="sakshi" && password=="lol"){
        clbk(null, "Logged in successfully");
    }
    else 
        clbk("Invalid username and password", null); 
}
logInHandler("sakshi", "lol",login);
>>>>>>> 3d498843118507b4fad7e5052333dffde7ac8eef
