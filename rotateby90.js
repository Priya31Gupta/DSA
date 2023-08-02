const rotateBy90 = (arr,n) => {
    for(let i=0;i< (n/2); i++){
        for(let j=i;j<n-1-i;j++){
            let temp = arr[i][j];
            arr[i][j] = arr[j][n-i-1];
            arr[j][n-i-1] = arr[n-i-1][n-j-1];
            arr[n - 1 - i][n - j - 1]= arr[n-1-j][i];
            arr[n-1-j][i] =temp ;
        }
    }
    console.log(arr)
}

const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

rotateBy90(arr,3)