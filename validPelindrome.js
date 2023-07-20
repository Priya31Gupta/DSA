var isPalindrome = function(s) {
    let i=0,j=s.length-1;
    while(i<j){
        //console.log(s[i],s[j],isCharLetter(s[i]))
        if(!isCharLetter(s[i])){
            i++;
        }else if(!isCharLetter(s[j])) j--;
        else if(s[i].toLowerCase() != s[j].toLowerCase()){
            return false;
        }else{
            i++;
            j--;
        }
        
    }
    return true;
};
function isCharLetter(char) {
    const code = char.charCodeAt(0);
    return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

console.log(isPalindrome("0P"));