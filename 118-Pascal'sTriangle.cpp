#include<bits/stdc++.h>
#include<vector>

using namespace std;

class Solution{
    public:
        vector<vector<int>> generator(int numRows){
            vector<vector<int>> result;
            for(int i = 0 ;i<numRows;i++){
                vector<int> caches(i+1,1);
                    for(int j = 1;j<i;j++){
                        caches[j] = result[i-1][j] + result[i-1][j-1];
                    }
                    result.push_back(caches);
                }
            return result;
            }
};