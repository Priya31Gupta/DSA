const  NTraversal = (arr) => {
    let row = arr.length;
    let col = arr[0].length;
    //console.log(row,col);
    let res = []
    for(let i = row-1; i > 0; i--){
        res.push(arr[i][0])
    }
    for(let j=0;j<arr.length;j++){
        res.push(arr[j][j])
    }
    for(let k = col-2;k>=0;k--){
        res.push(arr[k][col-1])
    }
    console.log(res)
}

const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

NTraversal(arr);