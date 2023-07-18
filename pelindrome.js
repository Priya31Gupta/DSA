/**
 * Given an integer x, return true if x is a palindrome and false otherwise.
 * Input: x = 121 
 * Output: true 
 */

function palindrome(num){
    const numArr = String(num).split('');
    let i = 0, j=numArr.length-1;
    //console.log(numArr,i,j)
    while(i<j){
        if(numArr[i] !== numArr[j]) return false;
        i++;
        j--;
    }
    return true;
}

console.log(palindrome(121))

function palindrome2(num){
    let copy = num;
    let rev = 0;
    while(copy > 0){
        rev += rev*10 + copy%10;
        copy = copy/10;
    }
    return copy === rev;
}