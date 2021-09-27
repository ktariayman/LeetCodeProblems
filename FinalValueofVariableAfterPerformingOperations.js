/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;
    operations.forEach(num => {
        if (num.includes("++")) {
            x++;
        } else {
            x--;
        }
    })
    return x;
};