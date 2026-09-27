var removeElement = function(nums, val) {
    let x=0;
    for(i=0;i<nums.length;i++){
        if(nums[i]!= val){
            nums[x] = nums[i];
            x=x+1;
        }
    }
    return x;
};
let res = removeElement([3,2,1,5,3,4,8,3] , 3);
console.log(res);