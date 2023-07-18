/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 * Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
    Input: s = "III"
    Output: 3
    Explanation: III = 3.
 */

function romanToInt(s){
    let intNum = 0;
    for(let i=0;i<s.length;i++){
        switch(s[i]){
            case "I": {
                if(i+1 < s.length && s[i+1] == 'V') {
                    intNum += 4;
                    i++;
                }
                else if(i+1 < s.length && s[i+1] == 'X'){
                    intNum += 9;
                    i++;
                }
                else intNum++;
                break;
            }
            case "V": {
                intNum += 5;
                break;
            }
            case "X": {
                if(i+1 < s.length && s[i+1] == 'L') {
                    intNum += 40;
                    i++;
                }
                else if(i+1 < s.length && s[i+1] == 'C'){
                    intNum += 90;
                    i++;
                }
                else intNum += 10;
                break;
            }
            case "L": {
                intNum += 50;
                break;
            }
            case "C": {
                if(i+1 < s.length && s[i+1] == 'M') {
                    intNum += 900;
                    i++;
                }
                else if(i+1 < s.length && s[i+1] == 'D'){
                    intNum += 400;
                    i++;
                }
                else intNum += 100;
                break;
            }
            case "D" : {
                intNum += 500;
                break;
            }
            case "M" : {
                intNum += 1000;
                break;
            }
        }
        
    }
    return intNum;
}

console.log(romanToInt("III"));

