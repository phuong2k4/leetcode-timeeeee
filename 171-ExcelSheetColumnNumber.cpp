#include<bits/stdc++.h>

using namespace std;

class Solution{
    public:
        int titleToNumber(string columnTitle){
            int ans = 0;
            for(char i : columnTitle){
                int temp = i - 'A' + 1;
                ans *= 26 + temp;
            } 
            return ans;
        }
}