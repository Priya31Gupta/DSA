const subArray = (arr) => {
    for(let i=0;i<arr.length;i++){
       
        for(let j=i;j<arr.length;j++){
           // console.log(`${arr[i]} ${arr[j]}`);
           let temp = [];
           for(let k =i; k<=j;k++){
            temp.push(arr[k])
            //console.log(arr[k])
           }
           console.log(temp)
        }
        
    }
}
subArray([1,2,3,4])