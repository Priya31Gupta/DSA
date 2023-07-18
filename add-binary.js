/**
 * Given two binary strings a and b, return their sum as a binary string.
 * Input: a = "11", b = "1"
 * Output: "100"
 */

function addBinary(a,b){
    let res =  BigInt( `0b${a}`, 2 ) + BigInt( `0b${b}`, 2 );;
    return res.toString(2);
}

console.log(addBinary("11","1"));