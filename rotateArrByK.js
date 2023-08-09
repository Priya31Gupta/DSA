function gcd( a, b){
    if (b == 0)
        return a;
    else
        return gcd(b, a % b);
}
function rotateArr(arr, d, n){
    // code here
    d = d % n;
let g_c_d = gcd(d, n);
for (let i = 0; i < g_c_d; i++) {
    /* move i-th values of blocks */
    let temp = arr[i];
    let j = i;

    while (1) {
        let k = j + d;
        if (k >= n)
            k = k - n;

        if (k == i)
            break;

        arr[j] = arr[k];
        j = k;
    }
    arr[j] = temp;
    console.log(arr)
}
    
}
console.log(rotateArr([1,2,3,4,5],2,5));