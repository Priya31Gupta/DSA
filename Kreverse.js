function reverseInGroups(arr, n, k){
        // code here
        for(let i=0;i<n;i= i+k){
            let left = i, right = Math.min(i+k-1,n-1);
            let temp;
            while(left<right){
                temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
                left++;
                right--;
            }
        }
    }