function check(A,B,N){
        // code here
        A.sort((a,b) => a-b);
        B.sort((a,b) => a-b);
        for(let i = 0;i <N;i++){
            if(A[i] != B[i]) return false;
        }
        return true;
    }