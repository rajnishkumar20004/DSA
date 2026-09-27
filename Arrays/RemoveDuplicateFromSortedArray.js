// use of twopointers in an array.

function removeduplicate(nums){
let x=0;
for(i=0;i<nums.length;i++){
    if(nums[i] > nums[x]){
        x=x+1;
        nums[x]=nums[i];

    }
}
return x+1;
}
let res=removeduplicate([0,0,1,1,1,2,2,3,3,4]);
console.log(res);