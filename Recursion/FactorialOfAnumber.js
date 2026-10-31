//  you will be given an pisitive intiger and you have to find the factorial of it as a result 
function findfactorial(n){
    if(n==1)return 1;
    return n * findfactorial(n-1);
}
let res = findfactorial(5)
console.log(res);