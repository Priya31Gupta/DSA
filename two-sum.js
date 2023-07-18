/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

var twoSumLoop = function(nums,target){
    for(let i =0; i<nums.length;i++){
        for(let j = i+1;j<nums.length;j++){
            if((nums[i]+nums[j])===target) return [i,j];
        }
    }
}

console.log(twoSumLoop([2,7,11,15,6],9))

var twoSum = function(nums,target){
   let map = new Map();
   for(let i=0;i<nums.length;i++){
        const diff = target - nums[i];
        // check whether difference is already present or not
        if(map.has(diff)) return [i,map.get(diff)];
        else map.set(nums[i],i)
   }
}
console.log(twoSum([2,7,11,15,6],9))