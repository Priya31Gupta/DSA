function peakElement(arr, n)
{
    // code here
    let ans = 0;
    for(let i=0;i<n;i++){
        console.log(i,arr[i])
        if(i ==0 ){
            if(arr[i] >= arr[i+1]) ans =i;
        }
        else if( i == n-1){
            if(arr[i] >= arr[i-1]) ans =i;
        }else{
            if(arr[i] >= arr[i+1] && arr[i] >= arr[i-1]) ans =i;
        }
        console.log(ans);
    }
    return ans;
}

console.log(peakElement([1,2,2,1],4))