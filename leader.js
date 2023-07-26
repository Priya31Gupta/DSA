function leaders(arr, n){
    // code here
    if(n == 1) return arr[0];
    let max = arr[n-1];
    let res = [max];
    for(let i = n-2;i>=0;i--){
        if(arr[i] >= max){
            max = arr[i];
            res.push(max);
        }
    }
    console.log(res.reverse())
}
leaders([16,17,4,3,5,2],6)