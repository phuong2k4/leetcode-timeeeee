#include <bits/stdc++.h>

using namespace std;

class SingleNumber{
    public:
        int singleNumber(vector<int>& nums){
            int ans=0;
            for(auto x:nums){
                ans^=x;
            }
            return ans;
        }
        int singleNumberv2(vector<int>& nums){
            unordered_map<int ,int> map;
            for(int i = 0 ;i<nums.size();i++){
                map[nums[i]]++;
            }
            for(int i = 0;i<nums.size();i++){
                if(map[nums[i]] < 2){
                    return nums[i];
                }
            }
            return 0;
        }
};