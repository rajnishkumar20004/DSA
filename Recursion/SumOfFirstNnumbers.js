// you will be given a number and find the sum of number before it including the given number 


function sum(n){
    if(n==0) return 0;
    return n+sum(n-1);
}
let res = sum(5);
console.log(res);