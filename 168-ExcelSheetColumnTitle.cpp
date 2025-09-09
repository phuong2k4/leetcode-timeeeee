#include<bits/stdc++.h>

using namespace std;

class Solution{
    public:
        string convertToTitle(int colNum){
            string ans;
            while(colNum > 0){
                colNum-=1;
                int mol = colNum % 26;
                ans.push_back(mol + 'A');
                colNum/=26;
            }
            reverse(ans.begin(),ans.end());
            return ans;
        }
};

int main(){
    Solution c;
    string d = c.convertToTitle(701);
    cout << d;
    return 0;
}

