#include <iostream>
#include <bits/stdc++.h>

using namespace std;

class Solution{
    public:
        int threeSumClosest(vector <int>& nums, int target){
            sort(nums.begin(), nums.end());
            int closest_Sum = INT_MAX / 2;

            for(int i = 0; i < nums.size() - 2;++i){
                int left = i + 1, right = nums.size() - 1;
                while(left < right){
                    int current_sum = nums[i] + nums[left] + nums[right];
                    if(abs(current_sum - target) < abs(closest_Sum - target)){
                        closest_Sum = current_sum;
                    }
                    if(current_sum < target){
                        ++left;
                    }else if(current_sum > target){
                        --right;
                    }else{
                        return current_sum;
                    }d
                }
            }
            return closest_Sum;
        }
};