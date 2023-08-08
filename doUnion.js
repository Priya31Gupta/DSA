function doUnion(a, n, b, m){
        // code here
        let set = new Set([...a,...b])
        let res = [...set];
        console.log(res, set)
        return res.length;
    }
console.log(doUnion([85, 25, 1, 32, 54, 6],6,[85,2],2))