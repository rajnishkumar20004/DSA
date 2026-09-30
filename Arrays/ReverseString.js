//how to swap btn two numbers in an array
//the logic of swapping 
let s;
function ReverseString(s){
    temp =0;
    let arr = s.split("");
    for(i=0;i<arr.length/2;i++){
        temp = arr[i];
         arr[i] = arr[arr.length-i-1];
         arr[arr.length-i-1] = temp;
    }
    return arr.join("");
};
res = ReverseString("rajinsh");
console.log(res);