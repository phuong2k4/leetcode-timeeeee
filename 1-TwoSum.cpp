#include <iostream>
#include <bits/stdc++.h>

using namespace std;


//O(n^2)
class Solution1{
	public:
		vector<int> twoSum(vector<int>&nums, int target){
			vector<int> result = {
			};
			for (int i = 0;i<nums.size();i++){
				for (int j = 0; j<i;j++)
				if (nums[i] + nums[j] == target){
					result.push_back(i);
					result.push_back(j);
				}
			}
            return result;
		}
};


class Solution2{
	public: 
		vector<int> twoSum(vector<int> &nums,int target){
			vector<int>result = {};
			for(auto it1 = nums.begin(); it1!=nums.end();it1++){
				auto it2 = find(it1+1, nums.end(),target - *it1);
				if(it2 != nums.end()){
					result.push_back(it1 - nums.begin());
					result.push_back(it2 - nums.begin());
					break;
				}
			}
			return result;
		}
};

class Solution3{
	public:
		vector<int> twoSum(vector<int> &nums,int target){
			unordered_map<int ,int> _map;
			for (int i =0;i<nums.size();i++){
				int num = nums[i];
				int complement = target-num;
				auto it = _map.find(complement);
				if(it != _map.end()){
					return {it->second , i};
				}
				_map[num] = i;
			}
			return {};
		}
};

class Solution{
	public:
		int _twoSum_ (vector<int> vec,int total){
			unordered_map<int, bool> _inputvector_;
			vector<int> untilAlgorithmRun;
			for(auto a : vec){
				int subtract = total - vec[a];
				if(!_inputvector_[subtract]){
					_inputvector_[subtract]=true;
					continue;
				}
				untilAlgorithmRun.push_back(a);
				ubtilAlgorithmRun.push_back(subtract);
			}
			return untilAlgorithmRun;
		}
};