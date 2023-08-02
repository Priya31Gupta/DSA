const circularTraversal = (arr) => {
    let top = 0, bottom = arr.length-1, left = 0, right = arr.length-1;
    //console.log(top,bottom,left,right);
    let res =[];
    // bottom to top
    for(let i= bottom; i>= top; i--){
        res.push(arr[i][left])
    }
    left++;
    //left to right
    for(let i = left; i<= right; i++)
        res.push(arr[top][i]);
    top++;
    // top to bottom
    for(let i = top; i<= bottom; i++)
        res.push(arr[i][right]);
    right--;
    //right to left
    for(let i=right; i>=left; i--)
        res.push(arr[bottom][i]);
    bottom--;
    console.log(res)
}

const allCircle = (arr, row =4, col=3) => {
    let top = 0, bottom = row-1, left = 0, right = col-1;
    let count = 0;
    let res =[];
    while( count != (row*col)){
        // bottom to top
        for(let i= bottom; i>= top; i--){
            res.push(arr[i][left]);
            count++;
        }
        left++;
        //left to right
        for(let i = left; i<= right; i++){
            res.push(arr[top][i]);
            count++;
        }
        top++;
        //top to bottom
        for(let i = top; i<= bottom; i++){
            res.push(arr[i][right]);
            count++;
        }
        right--;
        //right to left
        for(let i=right; i>left; i--){
            res.push(arr[bottom][i]);
            count++;
        }    
        bottom--;
        //break;
    }
            
    console.log(res)
}
const spiratTraversal = (arr, row,col) => {
    let top=0, bottom = row-1, left =0, right = col-1;
    let res = [], count =0, size = row*col;
    while(count != size){
        // left to right
        for(let i=left; i<=right; i++){
            res.push(arr[top][i]);
            count++;
        }
        top++;
        // top to bottom
        for(let i=top; i<= bottom; i++){
            res.push(arr[i][right]);
            count++;
        }
        right--;
        // right to left
        for(let i = right; i>=left; i--){
            res.push(arr[bottom][i]);
            count++;
        }
        bottom--;
        // bottom to top
        for(let i =bottom; i>=top; i--){
            res.push(arr[i][left]);
            count++;
        }
        left++;
       // break;
    }
    console.log(res)
}
const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
];
//circularTraversal(arr)
spiratTraversal(arr,4,3)
allCircle(arr,4,3)