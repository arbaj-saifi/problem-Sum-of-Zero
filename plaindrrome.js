/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let result = x;
    let sum = 0;
    while (x > 0) {
        let digit = x % 10;
        sum = sum * 10 + digit;
        x = Math.floor(x / 10);
    }
    return result === sum;
};
console.log(isPalindrome(121));