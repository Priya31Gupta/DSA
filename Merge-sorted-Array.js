var merge = function(nums1, m, nums2, n) {
    let i=0,j=0;
    let result=[];
    while(i<m && j<n){
        //console.log(nums1[i] , nums2[j],i,j)
        if(nums1[i] < nums2[j]){
            result.push(nums1[i]);
            i++;
        }else if(nums1[i] == nums2[j]){
            result.push(nums1[i]);
            i++;
            //j++;
        }else{
            result.push(nums2[j]);
            j++;
        }
        //console.log(result)
    }
    if(j <n){
        while(j<n){
            result.push(nums2[j]);
            j++
        }
    }else if(i <m){
        while(i<m){
            result.push(nums1[i]);
            i++
        }
    }
    //console.log(result)
    //nums1=result;
    for(let i=0;i<nums1.length;i++){
        nums1[i] = result[i];
    }
    console.log(nums1)
};
merge([1,2,3,0,0,0],3,[2,5,6],3);
var mergeTwoPointer = function(nums1, m, nums2, n) {
    let i=m-1,j=n-1,k=m+n-1;
   // let result=[];
    while(j >= 0){
        if(i>=0 && nums1[i] > nums2[j]){
            nums1[k--] = nums1[i];
            i--;
        }else{
            nums1[k--] = nums2[j];
            j--;
        }
    }
    return nums1;
};
console.log(mergeTwoPointer([1,2,3,0,0,0],3,[2,5,6],3));