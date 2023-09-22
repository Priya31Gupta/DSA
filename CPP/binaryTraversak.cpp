// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;

class Node {
    public:
    int data;
    Node* left;
    Node* right;
    Node(int v){
        this->data = v;
        this->left = this->right = NULL;
    }
};

void printInorder(Node *node){
    if(!node){
        return;
    }
    printInorder(node->left);
    std::cout << node->data<<endl;
    printInorder(node->right);
}

void printPostorder(Node *node){
    if(!node){
        return;
    }
    printPostorder(node->left);
    printPostorder(node->right);
    std::cout << node->data<<endl;
}

void printPretorder(Node *node){
    if(!node){
        return;
    }
    std::cout << node->data<<endl;
    printPretorder(node->left);
    printPretorder(node->right);
}

int main() {
    std::cout << "Hello world!"<<endl;
    Node* root = new Node(100);
    root->left = new Node(20);
    root->right = new Node(200);
    root->left->left = new Node(10);
    root->left->right = new Node(30);
    root->right->left = new Node(150);
    root->right->right = new Node(300);
    printInorder(root);
    std::cout << "Hello world!"<<endl;
    printPostorder(root);
    std::cout << "Hello world!"<<endl;
    printPretorder(root);
    return 0;
}