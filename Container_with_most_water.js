

// you are given an array of positive integers where each integer represents the height of a vertical line on a chart .
// Find two lines hich together with the x-axis forms a container that would hold the greatest amout of water .
// return the area of water it would hold

// Questions : 
//     - does the thickness of the lines affect the area ? 
//     => no , assume the take up no space
//     - Do the left & right sides of the graph count as walls ?
//     => no the sides cannot be used to form a container 
//     -Can we pick two values if one value is higher in the middle?
//     => yes , the value in the middle won't affect the container 

    // Exemples : 
    //     [7,4,3,5,9] => 7*4 = 28 
    //     [] =>0
    //     [8]=>0
    //     [1,4,7,2,9,1,2,4,5,8] => 8*5 = 40 
    // area = length * width 
    // area = min( a,b) * (bi-ai)

    // Code :
    const getMaxWaterContainer = function(heights){
        let maxArea =0;
        for ( let i=0;i<heights.length;i++){
            for ( let j=0;j<heights.length;j++){
                const height = Math.min(heights[i],heights[j])
                const width = j-i;
                const area = height * width 
                maxArea = Math.max(maxArea,area)
            }
            return maxArea
        }
    }

    // time = O(n²) 
    // space = O(1);

    // Better Solution using 2 pointers technique  

    const getMaxWaterContainer = function(heights){
        let maxArea =0;
        let i =0; // pointeur 1 
        let j =heights.max-1; // pointeur 2 
        while (i<j) {
                const height = Math.min(heights[i],heights[j])
                const width = j-i;
                const area = height * width 
                maxArea = Math.max(maxArea,area)
            (heights[i] <= heights[j]) ? i++ : j-- ;
            } // end while loop 
            
            return maxArea;
        }
    
