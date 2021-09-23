/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // for ( let i = 0 ; i<nums.length ; i++){
    //     if (nums[i] >= target ){
    //         return i ;
    //     }
    // }
    // return nums.length
    // TIme Complexity : O(n)
    // space complexity : O(1)

    // Better solution  
    let start = 0;
    let end = nums.length
    while(start < end) {
        const middle = start + Math.floor((end - start) / 2)
        if(nums[middle]===target) {
           return middle
        } else if(nums[middle] > target){
            end = middle
        } else {
            start = middle + 1
        }
    }
    return start
    
    // Time Complexity : O(log(n))
    // Space Complexity: O(1)
};