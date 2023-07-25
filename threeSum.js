var threeSum2 = function(nums) {
    let res = [];
    nums.sort((a,b) => a - b)
    for(let i=0;i < nums.length-2;i++){
        if( i === 0 || nums[i] !== nums[i-1]){
            let low = i+1;
            let high = nums.length-1;
            let sum = 0;
            console.log(nums[low] + nums[high] + nums[i],nums[low] , nums[high] , nums[i]);
            while(low < high){
                if(nums[low] + nums[high] + nums[i] == 0 ){
                    res.push([nums[low],nums[high],nums[i]]);
                    while (low < high && nums[low] === nums[low+1]) low++;
                    while (low < high && nums[high] === nums[high-1]) high--;
                    low++;
                    high--;
                }else if(nums[low] + nums[high] + nums[i] > 0) {
                    high--;
                }else low++;
            }
        }
        
    }
    return res;
};
console.log(threeSum2([1,-1,-1,0]))