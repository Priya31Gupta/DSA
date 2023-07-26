function binarySearch(arr, n, k){
    let low = 0 , high = n-1;
        while(low<=high){
            let mid = low + Math.floor((high-low)/2);
            if(arr[mid] < k){
                low = mid+1;
            }else if(arr[mid] > k){
                high = mid-1;
            }else{
                return mid;
            }
        }
        return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5],5,4))