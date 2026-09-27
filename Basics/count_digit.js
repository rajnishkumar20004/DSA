//       create a function to find no of digits in a number.

function countDigi(n){
    count=0;
    while(n>0){
        n= Math.floor(n/10);
        count++
    }
    return count;
}
let res = countDigi(86575678908);
console.log(res);