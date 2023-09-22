// Online C++ compiler to run C++ program online
#include <iostream>
#include<stdlib.h>  
using namespace std;
struct Node {
    int data;
    struct Node *next;
};

struct Node* head = NULL;
    
void append(int new_data){
    struct Node* temp = (struct Node*) malloc(sizeof(struct Node));
    temp->data = new_data;
    temp->next = NULL;
    //head.next = temp;
    if(!head){
        head = temp;
    }else{
        struct Node* copy = head;
        while(copy->next!=NULL){
            copy = copy->next;
        }
        copy->next = temp;
    }
    
    return;
}
    
void print(){
    struct Node *copy = head;
    while(copy!= NULL){
        std::cout << copy->data << endl;
        copy = copy->next;
    }
    return;
}

void deleteFirst(){
    head = head->next;
    return;
}
void deleteEnd(){
    struct Node* copy = head;
    struct Node* prev = NULL;
    
    while(copy->next != NULL){
        prev = copy;
        copy = copy->next;
    }
    prev->next = NULL;
    return;
}
void appendAfter(int new_data, int testData){
    struct Node* temp = (struct Node*) malloc(sizeof(struct Node));
    temp->data = new_data;
    struct Node* curr = head;
    struct Node* next = head->next;
    
    while(curr -> next != NULL){
        if(curr->data == testData){
            curr->next = temp;
            temp->next = next;
            return;
        }
        next = next->next;
        curr = curr->next;
    }
}
void deleteAfter(int testData){
    struct Node* curr = head;
    struct Node* next = head->next;
    
    while(curr -> next != NULL){
        if(curr->data == testData){
            curr->next = next->next;
            return;
        }
        next = next->next;
        curr = curr->next;
    }
}
int main() {
    // Write C++ code here
    std::cout << "Hello world!"<<endl;
    append(5);
    append(7);
    append(17);
    append(71);
    append(70);
    print();
    deleteFirst();
    std::cout << "deleteFirst"<<endl;
    print();
    deleteEnd();
    std::cout << "deleteLast"<<endl;
    print();
    return 0;
}