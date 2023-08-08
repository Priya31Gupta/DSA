function getNthFromLast(head, n) {
    // code here
    if(!head) return -1;
    let copy = head;
    let count = 0;
    while(copy != null){
        count++;
        copy = copy.next;
    }
    if(count < n) return -1;
    copy = head;
    while(copy != null && count != n){
        copy = copy.next;
        count--;
    }
    return copy.data;
}