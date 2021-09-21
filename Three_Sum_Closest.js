// Solution using 2 pointers technique 

const threeSum  = function (nums , target) {
    nums.sort((a,b) => a-b);
    const ans = nums[0]+nums[1]+nums[2];
    for(let i=0 ; i<nums.length-2;i++){
        let left=i+1;
        let right =nums.length-1;
        while(left<right){
            const sum = nums[i] + nums[left] + nums[right];
            if(sum>target){
                right --;
            }else if(sum<target ){
                left++;
            }
            if(Math.abs(target-sum) < Math.abs(target-ans)) {
                ans =sum;
            }
        }
    }
    return ans ;
}

// time = O(n²) 