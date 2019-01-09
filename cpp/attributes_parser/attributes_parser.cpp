#include <cmath>
#include <cstdio>
#include <vector>
#include <map>
#include <iostream>
#include <algorithm>
#include <sstream>
using namespace std;

map<string, string> tags;
vector<string> currentOpenTagNames;

string getTagPath() {
  string path = "";
  for (int i = 0; i < currentOpenTagNames.size(); i++) {
      path = path + currentOpenTagNames[i] + ".";
  }
  // replace last . with ~;
  return path.substr(0, path.length() - 1) + "~";
}

void getAttributes(string s) {
    stringstream ss(s);
    string token;
    vector<string> tokens;
    string tagPath = getTagPath();
    string value;
    
    // strip tag name from program line
    getline(ss, token, ' ');
    
    // tokenize remaining string
    while (getline(ss, token, ' ')) {
        tokens.push_back(token);
    }
    
    // iterate through tokens, assigning names and values
    for (int i = 0; i < tokens.size(); i++) {
        string tagString = tagPath + tokens[i];
        // strip quotes (and closing > if it's the last attribute)
        if (tokens[i + 2][tokens[i + 2].length() - 1] == '>') {
            value = tokens[i + 2].substr(1, tokens[i + 2].length() - 3);
        } else {
            value = tokens[i + 2].substr(1, tokens[i + 2].length() - 2);
        }
        tags[tagString] = value;

        // skip past = and value before next iteration
        i += 2;
    }
}

string getToken(string line, int index) {
    string token = line.substr(index, 1);
    for (int i = index + 1; line[i] && line[i] != ' ' && line[i] != '>'; i++) {
        token += line[i];
    }
    return token;
}

void getTags(string s) {
    if (s[1] != '/') {
        // we have an opening tag
        currentOpenTagNames.push_back(getToken(s, 1));
        getAttributes(s);

    } else {
        currentOpenTagNames.pop_back();
    }
}

void doQueries(string q) {
    // for each query:
    map<string, string>::iterator it;
    it = tags.find(q);
    cout << (it != tags.end() ? tags[q] : "Not Found!") << endl;
}

int main() {
    string input;
    int n = 6;
    int q = 4;
    string program[] = {
        "<a>",
        "<b name = \"tag_one\">",
        "<c name = \"tag_two\" value = \"val_907\">",
        "</c>",
        "</b>",
        "</a>",
    };
    string queries[] = {
        "a.b~name",
        "a.b.c~value",
        "a.b.c~src",
        "a.b.c.d~name",
    };
    for (int i = 0; i < n; i++) {
        getTags(program[i]);
    }

    for (int i = 0; i < q; i++) {
        doQueries(queries[i]);
    }
    return 0;
}
