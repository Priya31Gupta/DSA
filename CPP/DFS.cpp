// Online C++ compiler to run C++ program online
#include <bits/stdc++.h>
#include <iostream>
using namespace std;

class Graph{
    map<int, bool> visited;
    map<int, list<int>>  adj;
    public:
     void addEdge(int v, int w){
         adj[v].push_back(w);
     }
     void DFS(int v){
         visited[v] = true;
         std::cout << v <<endl;
          list<int>::iterator i;
         for( i= adj[v].begin(); i!= adj[v].end(); ++i){
         if(!visited[*i])
          DFS(*i);
         }
     }
};

int main() {
    std::cout << "Hello world!"<<endl;

    Graph g;
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    g.addEdge(2, 3);
    g.addEdge(3, 3);
    //g.BFS(2);
    g.DFS(2);
    return 0;
}