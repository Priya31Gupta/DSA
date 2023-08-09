function isPalindrome(S){
        //code here
        let i =0, j = S.length-1;
        while(i < j){
            if(S[i] != S[j]) return 0;
            i++;
            j--;
        }
        return 1;
    }