function commonElements(arr1, arr2, arr3, n1, n2,n3){
        //code here
        const set1 = new Set(...[arr1]);
        const set2 = new Set(...[arr2]);
        const set3 = new Set(...[arr3]);
        let res = [];
        //console.log(set1,set2,set3, set1.has(1));
        let arr;
        if( Math.min(n1,n2,n3) == n1 ){
            arr = arr1;
        }else if(Math.min(n1,n2,n3) == n2){
            arr = arr2
        }else if(Math.min(n1,n2,n3) == n3){
            arr = arr3;
        }
        for(let i =0 ;i< Math.min(n1,n2,n3);i++){
            if(set1.has(arr[i]) && set2.has(arr[i]) && set3.has(arr[i])){
                //console.log(arr1[i], arr2[i], arr3[i],set1.has(arr1[i]) , set2.has(arr1[i]) , set3.has(arr1[i]))
                if(!res.includes(arr[i]))
                res.push(arr[i]);
            }
        }
        console.log(res);
    }

commonElements([3,3,3],[3,3,3],[3, 3,3],3,3,3)
