var getConcatenation = function(nums) {
    len = nums.length - 1 ;
    ans=[];
    for(let i=0;i<nums.length;i++){
        ans[i]= nums[i];
    }
    for(let i=0;i<nums.length;i++){
        ans[len + i]= nums[i];
    }
    return ans;
};