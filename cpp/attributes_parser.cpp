#include "attributes_parser.h"
#include <cmath>
#include <cstdio>
#include <iostream>
#include <algorithm>
#include <sstream>

string getToken(string line, int index) {
  string token = line.substr(index, 1);
  for (int i = index + 1; line[i] && line[i] != ' '; i++) {
    token += line[i];
  }
  return token;
};

map<string, string> getAttributes(string s) {
    stringstream ss(s);
    string token;
    vector<string> tokens;
    map<string, string> attributes;
    string name;
    string value;
    int i = 0;

    // strip tag name from program line
    getline(ss, token, ' ');

    // tokenize remaining string
    while (getline(ss, token, ' ')) {
        tokens.push_back(token);
    }

    // iterate through tokens, assigning names and values
    for (size_t i = 0; i < tokens.size(); i++) {
        name = tokens[i];
        value = tokens[i + 2];
        if (tokens[i+2][tokens[i+2].length() - 1] == '>') {
            value = tokens[i + 2].substr(1, tokens[i + 2].length() - 3);
        } else {
            value = tokens[i + 2].substr(1, tokens[i + 2].length() - 2);
        }
        attributes[name] = value;
        i += 2;
    }
    return attributes;
}

vector<Tag> getSubtags(string program[], int index) {
    vector<Tag> subtags;
    for (int i = index; program[i][1] != '/'; i++) {
        subtags.push_back(getTag(program, i));
    }
    return subtags;
}

Tag getTag(string program[], int i) {
    // cout << "in getTag: " << i << endl;
    return {
        getToken(program[i], 0).substr(1),
        getAttributes(program[i]),
        getSubtags(program, i + 1)
    };
}

vector<Tag> getTags(vector<Tag> tags, string program[], int n) {
    for (int i = 0; i < n; i++) {
        if (program[i][1] != '/') {
            // we have an opening tag
            tags.push_back(getTag(program, i));
            // peek ahead 1 index and increment i until we see a closing tag
            while (program[i + 1][1] != '/') {
                i += 1;
            }
        }
    }
    return tags;
}

void doQueries(string queries[], vector<Tag> tags, int q) {
    // for each query:
    for (int i = 0; i < q; i++) {
        string token;
        string targetAttributeName;
        vector<string> allQueryTags;
        string queryTagString;
        for (size_t j = 0; j < queries[i].length(); j++) {
            if (queries[i][j] == '~') {
                targetAttributeName = queries[i].substr(j + 1);
                queryTagString = queries[i].substr(0, j);
                break;
            }
        }

        // tokenize queryTagString
        int prevStartIndex = 0;
        for (size_t j = 0; j < queryTagString.length(); j++) {
            if (queryTagString[j] == '.') {
                // found the end of a query tag name
                allQueryTags.push_back(queryTagString.substr(prevStartIndex, j));
                prevStartIndex = j + 1;
            }
        }
        // capture last query tag
        allQueryTags.push_back(queryTagString.substr(prevStartIndex));

        for (size_t j = 0; j < tags.size(); j++) {
            if (tags[j].name == allQueryTags[0]) {
                Tag currentTag = tags[j];
                for (size_t k = 1; k < allQueryTags.size(); k++) {
                    for (size_t l = 0; l < currentTag.subtags.size(); l++) {
                        if (currentTag.subtags[l].name == allQueryTags[k]) {
                            currentTag = currentTag.subtags[l];
                            break;
                        }
                    }
                }
                // search attributes in currentTag
                if (currentTag.attributes.find(targetAttributeName) != currentTag.attributes.end())  {
                    cout << currentTag.attributes[targetAttributeName] << endl;
                    break;
                } else {
                     cout << "Not Found!" << endl;
                }
                break;
            } else {
                cout << "Not Found!" << endl;
            }
        }
    }
}

int main() {
    string input;
    int n, q;
    vector<Tag> tags;
    getline(cin, input);
    n = int(input[0] - '0');
    q = int(input[2] - '0');
    string program[n];
    string queries[q];
    for (int i = 0; i < n; i++) {
        getline(cin, program[i]);
    }
    for (int i = 0; i < q; i++) {
        getline(cin, queries[i]);
    }
    tags = getTags(tags, program, n);
    doQueries(queries, tags, q);
    
    return 0;
}
