 // To find sum of all the integers of the array.
 
 function sum(n){
    if(n==0) return arr[0];
    return arr[n]+sum(n-1);
 }
 let arr=[5,3,2,10,1];
 let res = sum(arr.length -1 );
 console.log(res);
