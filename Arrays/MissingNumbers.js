//APPROACH --- 01(By shorting the array)
var missingNumber = function(nums) {
nums.sort((a,b) => a-b);
if(nums[0] !== 0){
    return 0;
}
for(i=0;i<nums.length; i++){
   if(nums[i]+1 != nums[i+1]){
    return nums[i]+1;
   }
}
return nums.length;
};

// AAPROOACH -------02(by using mathmatical formula of total sum)
function missingNumber(nums){
    let n=nums.length;
    let partialsum=0;
    maximumsum=n*(n+1)/2;
    for(i=0;i<nums.length;i++){
        partialsum = partialsum + nums[i]
    }
    return maximumsum - partialsum;
}