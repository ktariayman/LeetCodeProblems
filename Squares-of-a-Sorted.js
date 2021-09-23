// var sortedSquares = function (nums) {
//     for ( let i=0 ; i<nums.length ; i++){
//         nums[i] = Math.pow(nums[i],2);
//     }
//     return nums.sort((a,b) => a-b);
// }

// // Time complexity : O(n ²) 
var sortedSquares = function (nums) {
   let start=0; end = nums.length-1;
   let ans = [];
   while (start <= end ){
       let number1=Math.pow(nums[start],2);
       let number2=Math.pow(nums[end],2);
       if (number1 < number2 ){
           ans.push(number2);
           end--
       }else{
           ans.push(number1);
           start++;
       }

   }
   return ans.reverse();
}

// Time complexity = O(N) 