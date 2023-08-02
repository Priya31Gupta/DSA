const bubbleSort = (arr) => {
    for(let i =0;i < arr.length-1;i++){
        let no_of_swap = 0;
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]=temp;
                no_of_swap++;
            }
        }
        if(no_of_swap == 0 ) break;
    }
    console.log(arr);
}
bubbleSort([3,2456789,-234,1]);
