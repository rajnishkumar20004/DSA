//create a basic function 
function myfunc(){
    console.log("hi")
} 
myfunc();


//create a function to greet specific people 
function greetpeople(name){
console.log("hello " + name);
}
greetpeople("rajnish");
greetpeople("piyush");


//create a function change to value and then add them.
function addtwonum(a,b){
    let sum=a+b;
    console.log(sum);
}
let X = 56;
let Y = 34;
addtwonum(X,Y);


//create a function to find if a persion is eligble to vote or not 
function checkeligibility(age){
    if (age<18){
        console.log("not eligble" )
    } 
    else {
        console.log("is eligble")
    }
}
checkeligibility(37);
checkeligibility(16);


//create a function to check if a number is even or odd 
function checkevenodd(number){
    if (number%2 === 0){
        console.log("even number");
    }
    else {
        console.log("odd number");
    }
}
checkevenodd(43);
checkevenodd(8);