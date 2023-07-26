function sort012(arr, N)
{
    //your code here
    let cnt0 = 0, cnt1 =0, cnt2 =0;
    for(let i=0;i<N;i++){
        if(arr[i] == 0) cnt0++;
        else if(arr[i] == 1) cnt1++;
        else cnt2++;
    }
    let i =0;
    while(cnt0 > 0) {
        arr[i] = 0;
        i++;
        cnt0--;
    }
    while(cnt1 > 0) {
        arr[i] = 1;
        i++;
        cnt1--;
    }
    while(cnt2 > 0) {
        arr[i] = 2;
        i++;
        cnt2--;
    }
}

function sort012binary(arr,n){
    let low = 0,mid =0, high = n-1;
    while(mid <= high){
        if(arr[mid] == 0 ){
            arr = swap(arr,low,mid);
            low++;mid++;
        }else if(arr[mid] == 1) mid++;
        else {
            arr = swap(arr,mid,high);
            high--;
        }
    }
    return arr;
}
function swap(arr,i,j){
    let temp = arr[i];
    arr[i]=arr[j];
    arr[j] = temp;
    return arr;
}

console.log(sort012binary([0, 2, 1, 2, 0],5))