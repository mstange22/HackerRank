#include <iostream>
#include <vector>
#include <map>
#include <string>
#include <algorithm>
#include <set>
#include <cassert>
#include <sstream>
using namespace std;

struct Node{
   Node* next;
   Node* prev;
   int value;
   int key;
   Node(Node* p, Node* n, int k, int val):prev(p),next(n),key(k),value(val){};
   Node(int k, int val):prev(NULL),next(NULL),key(k),value(val){};
};

class Cache{
   
   protected: 
   map<int,Node*> mp; //map the key to the node in the linked list
   int cp;  //capacity
   Node* tail; // double linked list tail pointer
   Node* head; // double linked list head pointer
   virtual void set(int, int) = 0; //set function
   virtual int get(int) = 0; //get function

};

class LRUCache : Cache {
  public:
    LRUCache(int capacity) {
        this->cp = capacity;
        this->tail = NULL;
        this->head = NULL;
    }

    int get(int key) {
        map<int, Node*>::iterator it = mp.find(key);
        if (it == mp.end()) {
            return -1;
        }
        return it->second->value;
    }

    void set(int key, int value) {
      if (mp.find(key) == mp.end()) { // key does not exist in cache
        Node* new_node = new Node(key, value);
        mp[key] = new_node;
        if (!head) { // first element in cache
          head = new_node;
          tail = new_node;
          new_node->next = NULL;
        } else {
          if (mp.size() > cp) { // at capacity
            // remove value from map
            // get key of tail element
            mp.erase(tail->key);
            // remove tail element
            tail = tail->prev;
            tail->next = NULL;
          }
          // add element to head
          head->prev = new_node;
          new_node->next = head;
          head = new_node;
        }
      } else { // collision, move value to front
        // find element in list
        Node* curr = head;
        // cout << "key: " << key << endl;
        while (curr && curr->key != key) {
          curr = curr->next;
        }
        // delete existing element
        curr->prev->next = curr->next;
        curr->next = head;
        curr->prev = NULL;
        head = curr;
        head->value = value;
        mp[head->key] = head;
      }
    }
};


int main() {
  int n = 12;
  int capacity = 3;
  string input = "set 1 2\nset 2 4\nset 1 1\nset 3 9\nget 1\nget 2\nset 4 2\nset 2 4\nset 3 81\nget 4\nget 1\nget 3\n";
  stringstream ss(input);
  LRUCache l(capacity);
  for(int i=0;i<n;i++) {
    string command;
    ss >> command;
    if(command == "get") {
        int key;
        ss >> key;
        cout << l.get(key) << endl;
    } 
    else if(command == "set") {
        int key, value;
        ss >> key >> value;
        l.set(key,value);
    }
  }
  return 0;
}
