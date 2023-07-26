function missingNumber(array,n){
    //code here
    const set = new Set(...[array]);
    //console.log(set);
    for(let i =1; i<=n;i++){
       // console.log(i,array.includes(i));
        if(!set.has(i)) return i;
    }
}
console.log(missingNumber([1,2,3,5],5))