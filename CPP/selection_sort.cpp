// Online C++ compiler to run C++ program online
#include <iostream>
#include <bits/stdc++.h>
using namespace std;

void selectionSort(int arr[], int n){
    for(int i=0;i<n-1;i++){
        int minIndex = i;
        for(int j = i+1; j<n;j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i]=temp;
    }
     //std::cout << arr <<endl;
     for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
    cout << endl;
}



int main() {
    std::cout << "Hello world!"<<endl;
    int arr[] ={ 5, 1, 4, 2, 8};
    selectionSort(arr,5);
    return 0;
}