
/*
This solution uses a brute force algorithm to find all unique quadruplets in the array that sum up to the target value. 
The brute force approach involves checking all possible combinations of four numbers in the array, which is computationally expensive 
but straightforward to implement. It iterates through each possible combination and checks if the sum matches the target.
*/

#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
        
        // Sort the input array to handle duplicates easily
        sort(nums.begin(), nums.end());
        
        // Initialize a vector to store the result quadruplets
        vector<vector<int>> result;
        
        // Get the size of the input array
        int n = nums.size();
        
        // Iterate over the array with the first pointer
        for (int i = 0; i < n - 3; ++i) {
            
            // Skip duplicate elements for the first pointer
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            
            // Iterate over the array with the second pointer
            for (int j = i + 1; j < n - 2; ++j) {
                
                // Skip duplicate elements for the second pointer
                if (j > i + 1 && nums[j] == nums[j - 1]) continue;
                
                // Iterate over the array with the third pointer
                for (int k = j + 1; k < n - 1; ++k) {
                    
                    // Skip duplicate elements for the third pointer
                    if (k > j + 1 && nums[k] == nums[k - 1]) continue;
                    
                    // Iterate over the array with the fourth pointer
                    for (int l = k + 1; l < n; ++l) {
                        
                        // Skip duplicate elements for the fourth pointer
                        if (l > k + 1 && nums[l] == nums[l - 1]) continue;
                        
                        // Calculate the sum of the current quadruplet
                        long long sum = (long long)nums[i] + nums[j] + nums[k] + nums[l];
                        
                        // Check if the sum matches the target
                        if (sum == target) {
                            
                            // Add the quadruplet to the result
                            result.push_back({nums[i], nums[j], nums[k], nums[l]});
                        }
                    }
                }
            }
        }
        
        // Return the result containing all unique quadruplets
        return result;
    }
};
```