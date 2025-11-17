#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    bool isomorphic(string s, string t){
        vector<int> indexS(256,0);
        vector<int> indexT(256,0);

        if(s.length() != t.length()){
            return false;
        }

        for(int i = 0;i<s.length();i++){
            if(indexS[s[i]] != indexT[t[i]]){
                return false;
            }
            indexS[s[i]] = i+1;
            indexT[t[i]] = i+1;
        }
        return true;
    }
};

int main(){
    Solution slt;
    string s,t;
    getline(cin,s);
    getline(cin,t);

    if(slt.isomorphic(s,t)){
        cout << "true";
    }else{
        cout << "false";
    }
    return 0;
}