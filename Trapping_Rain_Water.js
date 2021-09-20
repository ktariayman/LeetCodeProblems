

//  you are given an array of integers representing an elevation map 
// where the width of each bar is 1 , 
// return how much rainwater can be trapped

// Questions : 
//     - Do the left & right sides of the graph count as walls ?
//     => no the sides are not walls
//    - will there be negative integers ? 
//    =>no , assume all integers are positive
//    

    // Exemples : 
    //     [0,1,0,2,1,0,3,1,0,1,2] =>8  
    //     [] =>0
    //     [8]=>0
    //     [3,4,3] => 0
    

    // Code :
    const trap = function(heights){
        let totalWater =0;
        for ( let i=0;i<heights.length;i++){
    
            let left = i ,right = i,maxLeft = 0 ,maxRight = 0 ; 
            while ( left >= 0){
                maxLeft = Math.max(maxLeft,heights[left])
                left--;
            }
            while ( right <= heights.length){
                maxRight = Math.max(maxRight,heights[right])
                right++;
            }
            const currentWater = Math.min(maxLeft,maxRight) - heights[i];
            if(currentWater >= 0 ) totalWater += currentWater;
            }
            return totalWater
        }

    // time = O(n²) 
    // space = O(1);

    // Better Solution using 2 pointers technique  
    const trap = function(heights){
        let totalWater =0 , left = 0 ,right = heights.length-1,maxLeft = 0 ,maxRight = 0 ; 
        while ( left < right ) {
            if ( heights[left] <= heights[right]){
                if(heights[left] >= maxLeft){
                    maxLeft = heights[left];
                }else{
                    totalWater += maxLeft - heights[left];
                }
                left++;
            }else{
                if (heights[right] >= maxRight){
                    maxRight = heights[right]
                }else{
                    totalWater+= maxRight - heights[right]
                }
                right--;
            }
        }
        return totalWater;
        }
