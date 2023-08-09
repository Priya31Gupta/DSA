function isPowerofTwo(x)
    {
        // code here
        return x != 0 && ((x & (x - 1)) == 0);
    }