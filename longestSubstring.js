var lengthOfLongestSubstring = function(s) {
    let set = new Map();
    let maxLen = 1;
    let ptr = 0;
    if(s.length == 0 || s.length == 1) return s.length;
    for(let i=0; i<s.length; i++){
        if(set.has(s[i])){
           ptr = Math.max(set.get(s[i])+1, ptr);
        }
            set.set(s[i],i);
            //console.log(s[i],maxLen,"else",i)
            maxLen = Math.max(maxLen,i-ptr+1)
        
    }
    //console.log(set.size,maxLen,set)
    return maxLen;
};
console.log(lengthOfLongestSubstring("dvdf"))