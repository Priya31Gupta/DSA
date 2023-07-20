var singleNumber = function(nums) {
    let set = new Set();
    for(let i=0;i<nums.length;i++){
        if(!set.has(nums[i])){
            set.add(nums[i]);
        }else{
            set.delete(nums[i]);
        }
    }
    console.log(set)
    if(set.size){
        for (const value of set) {
            return value;
        }
    }
};
console.log(singleNumber([2,2,1,3,3]))