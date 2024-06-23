function hasDuplicate(nums){
    const newSet = new Set();
    for(let num of nums){
        if(newSet.has(num)) return true;
        else newSet.add(num);
    }
    return false;
}

let arr1 = [1,2,3,4];
let arr2 = [1,22,3,33,4,4];
console.log('arr1:',hasDuplicate(arr1));
console.log('arr2:',hasDuplicate(arr2));