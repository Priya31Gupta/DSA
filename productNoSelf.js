// bruteForce
function productExceptSelf(arr){
    let res= [];
    for(let i=0;i<arr.length;i++){
        let mul=1;
        for(let j=0;j<arr.length;j++){
            if(i==j)continue;
            mul *= arr[j];
        }
        console.log('✌️mul --->', mul);
        res.push(mul);
    } 
    console.log('✌️res --->', res);
}

// optimised
function product(nums){
    let leftproduct =1;
    let rightProduct=1,result=[];
    for(let i=0;i<nums.length;i++){
        result[i] = leftproduct;
        leftproduct *= nums[i];
    }
    //console.log('✌️result --->', result); 
    for(let i=nums.length-1;i>=0;i--){
        result[i] *= rightProduct;
        rightProduct*= nums[i]; 
    }
    console.log('✌️result --->', result); 
}
let arr1=[1,2,3,4,5];
productExceptSelf(arr1);
product(arr1);
