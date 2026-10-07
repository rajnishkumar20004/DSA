function MoveZeroes(nums){
    let pos=0;
    for(i=0;i<nums.length;i++){
        if(nums[i] !==0 ){
            nums[pos] = nums[i];
            pos++;
        }
    }
    for(i=pos;i<nums.length;i++){
        nums[i]=0;
    }
    return nums;
};
let res = MoveZeroes([0,1,0,3,12]);
console.log(res);