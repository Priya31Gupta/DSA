/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
 */
function twoSum(arr,target){
    let map = new Map();
    for(let i=0;i<arr.length;i++){
       let diff = target - arr[i];
        if(map.has(diff)){
            return [i,map.get(diff)];
        }
        else{
            map.set(arr[i],i);
        }
    }
    return [];
}

console.log('result:', twoSum([2,7,11,15],9));
console.log('result:', twoSum([3,2,4],6));