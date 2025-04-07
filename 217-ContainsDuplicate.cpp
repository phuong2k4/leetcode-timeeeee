#include<bits/stdc++.h>
#include<map>

// My solution... its take o(n) 
class Solution1 {
    public:
        bool containsDuplicate(std::vector<int>& nums){
            std::unordered_map<int,int> count;
            for(auto n : nums){
                count[n]++;
            }
            for(auto e : count){
                if(e.second >=2 ){
                    return true;
                }
            }
            return false;
        }
};

class Solution2{
    public:
        bool containsDuplicate(std::vector<int>& nums){
            sort(nums.begin(), nums.end());
            for(int i = 1;i<nums.size();i++){
                if(nums[i] == nums[i-1]){
                    return true;
                }
            }  
            return false;
        }
};