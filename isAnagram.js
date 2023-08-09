function isAnagram(a, b)
    {
        // code here
        let count = new Array(256).fill(0);
        for(let i=0;i<a.length;i++){
            count[a[i].charCodeAt(0)- 'a'.charCodeAt(0)]++;
            count[b[i].charCodeAt(0)- 'a'.charCodeAt(0)]--;
        }
        if(a.length != b.length) return false;
        for(let i =0; i<count.length;i++){
            if(count[i] != 0) return false;
        }
        
        return true;
        
        return a.split("").sort().join("") === b.split("").sort().join("") ? 'YES' : 'NO';
    }

console.log(isAnagram('allergy','allergic'))