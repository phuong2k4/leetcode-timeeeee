#include <bits/stdc++.h>
#include <vector>
#include <iostream>
#include <string>
using namespace std;

class Solution{
    public:
        string longestCommonPrefix(vector<string>& v){
            string result = "";
            sort(v.begin(), v.end());
            int n = v.size();
            string first = v[0], last=v[n-1];
            for(int i = 0;i< min(first.size(), last.size()); i++){
                if(first[i] != last[i]){
                    return result;
                }
                result += first[i];
            }
            return result;
        }
};