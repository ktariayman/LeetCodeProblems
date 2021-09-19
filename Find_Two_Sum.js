// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.


const findTwoSum  = function (nums,target) {
    for (let i = 0 ; i < nums.length; i++){
        const numbertoFind  = target - nums[i];
        for ( let j = i+1 ; i<nums.length ; j++){
            if ( numbertoFind === nums[p2]){
                return [p1,p2];
            }
        }
        } 

        return null;

    }

    const nums = [1,3,7,9,2]
    const targetToFind = 11;
    console.log(findTwoSum(nums, targetToFind))
