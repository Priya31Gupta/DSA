function equilibriumPoint(a, n)
{
    //your code here
    if( n <= 1) return 1;
    let sum = 0;
    for(let i=0;i<n;i++) sum += a[i];
    let leftSum = 0;
    for(let i=0;i<n;i++){
        sum -= a[i];
        if(leftSum == sum) return i+1;
        leftSum += a[i];
    }
    return -1;
}
console.log(equilibriumPoint([23],1))