// Given an array of integers nums that is already sorted in non-decreasing order, and an integer target, return indices of the two numbers such that they add up to target.


const findTwoSumII  = function (nums,target) {

    let lower = 0;
    let upper = nums.length - 1;
    while(upper>lower){
        let sum = nums[lower] + numbers[upper];
        if (sum < target){
            lower+=1
        }else if(sum > target){
            upper -=1;
        }else {
            return [lower +1 , upper+1]
        }
    }

    }

// time = O(n) 