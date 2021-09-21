const threeSum  = function (nums) {
    nums.sort((a,b) => a-b);
    const ans = [];
    for(let i=0 ; i<nums.length;i++){

        if (i>0 && num[i] === num[i-1]) continue;
        const target = 0 - num[i];
        let left=i+1;let right =nums.length-1;
        while(left<right){
            const sum = nums[left] + nums[right];
            if(sum>target){
                right --;
            }else if(sum<target ){
                left++;
            }else {
                ans.push(nums[i],nums[left],nums[right]);
                while(nums[left] === nums[left+1]) left++;
                while(nums[right] === nums[right+1])right--;
                left--;
                right++;
            }
        }
    }
    return results ;
}

// time : O(n²)
