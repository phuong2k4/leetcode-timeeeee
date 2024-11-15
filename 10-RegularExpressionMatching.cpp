#include <bits/stdc++.h>

using namespace std;

class Solution{
    public:
    bool isMatch(string s, string p){
        int n = s.length(),m= p.length();
        bool dp[n+1][m+1];
        memset(dp, false, sizeof(dp));
        dp[0][0]= true;

        for (int i = 0 ;i<=m;i++){
            for(int j = 1;j<=m;j++){
                if(p[j-1]=='*'){
                    dp[i][j] = dp[i][j-2];
                }
                else{
                    dp[i][j] = i > 0 && dp[i-1][j-1] && (s[i-1] == p[j-1] || p[j-1] == '.');
                }
            }
        }
        return dp;
    }
};