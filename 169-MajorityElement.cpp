#include<bits/stdc++.h>

using namespace std;

class Solution {
public:
    int majorityElement(vector<int>& nums) {
    unordered_map<int,int> map1;
    int max = 0;
    for(int i = 0;i<nums.size();i++){
        map1[nums[i]]++;
    }
    for(pair<int, int> it : map1){
        if(it.second > nums.size()/2){
            max = it.first;
        }
    }
    return max;
    }
};