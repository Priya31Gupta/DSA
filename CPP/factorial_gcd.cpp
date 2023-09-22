int factorial(int n){
        if(n==0 || n==1) return 1;
        return n * factorial(n-1);
}


int gcd(int a, int b){
    if(a == 0) return b;
    if(b == 0) return a;
    if(a == b) return a;
    if (a > b)
        return gcd(a - b, b);
    return gcd(a, b - a);
}