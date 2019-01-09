#include <vector>
#include <map>
#include <string>

using namespace std;

struct Tag {
    string name;
    map<string, string> attributes;
    vector<Tag> subtags;
};

Tag getTag(string[], int);
string getToken(string, int);
map<string, string> getAttributes(string);
vector<Tag> getTags(vector<Tag>, string, int);
vector<Tag> getSubtags(string, int);
void doQueries(string, vector<Tag>, int);
