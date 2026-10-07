function MaximumConsecutiveOne(nums){
let count =0;
    let maxcount=0;
    for(i=0;i<nums.length;i++){
        if (nums[i] != 0){
            count++; 
        }
        if(count > maxcount){
            maxcount= count;
        }
        if(nums[i] == 0){
            count=0;
        }
    }
    return maxcount;
};
let res = MaximumConsecutiveOne([1,1,0,1,1,1]);
console.log(res);