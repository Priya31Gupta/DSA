void bubbleSort(int arr[], int n){
    for(int i=0;i<n-1;i++){
        int no_of_swap = 0;
        for(int j=0;j<n-1-i;j++){
            if(arr[j] < arr[j+1]){
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]=temp;
                no_of_swap++;
            }
        }
        if(no_of_swap == 0 ) break;
    }
     //std::cout << arr <<endl;
     for (int i = 0; i < n; i++)
        cout << arr[i] << "";
}