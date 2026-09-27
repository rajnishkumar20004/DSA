//screate a basic for loop starting from 0 and going forward. 
for (let i=0 ; i<5 ; i++){
    console.log(i);
}


//create a for loop starting from zero and  going backward. 
for (let i=5;i>1;i--){
    console.log(i);
}


//call a function inside a loop 
function sayinghello(n){
    for(let i= 0 ; i<n ;i++){
        console.log("hello " + i);
    }
}
sayinghello(3);


//write a function that searches for an element in an array and returns the index, if the element is not present then just return -1
   function searchElement(Array,x){
   for (let i=0;i<Array.length ; i++){
    if (Array[i] === x){
        return i;
    }
    }
    return -1;
}
 let Array = [ 1,2,45,67,33,44,];
let resu = searchElement(Array,45);
console.log(resu);


//write a function that returns the number of negative numbers in an array 

function searchNegativeNo(arr){
    let count = 0;
    for(let i=0 ; i<arr.length ; i++){
        if (arr[i] < 0 ) {
            count = count + 1;
            
        }
    }
return count;
}
let arr=[5,4,3,6,-1,-6,-55,87,-5];
let res = searchNegativeNo(arr);
console.log(res);

//write a function that returns the largest num  in an aaray 
function largestNuma(Arra){
    let largest = -1;
    for(let i=0 ; i<Arra.length; i++){
        if(Arra[i]> largest ){
            largest= Arra[i];
        }
    }
    return largest;
}


let Arra = [ 33,2,45,67,33,44,];
let result= largestNuma(Arra)
console.log(result);