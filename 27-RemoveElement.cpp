#include<bits/stdc++.h>

using namespace std;

class Solution{
    public:
    int removeElement (vector<int>& nums, int val){
        for(auto it = nums.begin(); it != nums.end();){
            if( *it != val){
                it++;
            }
            it = nums.erase(it);
        }
        return nums.size()-1;
    }
};