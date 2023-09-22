// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;
#include<stack>  
#include <typeinfo>

int isAlphanumeric(char c){
    if( c >= 'A' && c <= 'Z')  
        return 1;  
    if (c >= 'a' && c <= 'z')    
        return 1;  
    if(c >= '0' && c <= '9')   
        return 1;  
    return 0;
}
bool IsOperator(char c)  {  
    if(c == '+' || c == '-' || c == '*' || c == '/' || c == '^' )  
        return true;     
    return false;  
}
int precedence(char op){
    if(op == '+' || op == '-')   
        return 1;  
    if (op == '*' || op == '/')  
        return 2;  
    if(op == '^')                
        return 3;       
    return 0;
}
bool eqlOrhigher (char op1, char op2)  {  
    int p1 = precedence(op1);  
    int p2 = precedence(op2);  
    if (p1 == p2){  
        if (op1 == '^' )  
            return false;  
        return true;  
    }  
    return  (p1>p2 ? true : false);  
} 

string  infixToPostfix(string infix){
    //char stack[100];
    stack <char> stack; 
    string postfix ="";    
    stack.push('(');
    infix += ')';  
    for(int i =0; i<infix.length(); i++){
        //std::cout<< infix[i] << isAlphanumeric(infix[i]) << endl;
        if(infix[i] == ' ') continue;
        else if(infix[i] == '(') stack.push(infix[i]);
        else if(isAlphanumeric(infix[i])){
            postfix += infix[i];
        }else if(IsOperator(infix[i])){
            while(!stack.empty() && eqlOrhigher(stack.top(), infix[i])){
                postfix += stack.top();
                stack.pop();
            }
            stack.push(infix[i]);
        }else if(infix[i] == ')'){  
            while(!stack.empty() && stack.top() != '('){  
                postfix += stack.top();  
                stack.pop();  
            }  
            stack.pop();  
        }
    }
    return postfix;
}

int evaluatePostFix(string postfix){
    stack <char> stack;
    for(int i =0; i<postfix.length(); i++){
        if(!isAlphanumeric(postfix[i])){
            int a = stack.top();
            stack.pop();
            int b = stack.top();stack.pop();
            if(postfix[i] == '+') stack.push((a+b));
            else if(postfix[i] == '-') stack.push((a-b));
            else if(postfix[i] == '*') stack.push((a*b));
            else if(postfix[i] == '/') stack.push((b/a));
            else if(postfix[i] == '^') stack.push((a^b));
        }else{
            stack.push((postfix[i] - '0'));
        }
    }
    return stack.top();
}
int main() {
    std::cout << "Hello world!"<<endl;
    std::cout << infixToPostfix("(A+B)+(C-D)")<<endl;
    std::cout << evaluatePostFix("21+3*")<<endl;
    
    return 0;
}