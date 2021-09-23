var search = function ( nums , target){
    let left = 0 ; 
    let right = nums.length-1;
    while(left<=right){
        let middle = Math.floor((left+right)/2 ) ;
        let x = nums[middle];
        if(x===target){
            return middle;
        }else if (x>target ){
            right = middle -1;
        }else {
            left = middle +1;
        }
    }
    return -1
}
// TIme Complexity : O(logn(n))
// space complexity : O(1)