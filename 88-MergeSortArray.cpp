#include<bits/stdc++.h>

using namespace std;

class Solution{
    public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        vector<int> res;
        for( int i = 0;i<m;i++){
            res.push_back(nums1[i]);
        }
        for( int j = 0;j<n;j++){
            res.push_back(nums2[j]);
        }
        sort(res.begin(), res.end());
        for(int i = 0;i<m+n;i++){
            nums1[i] = res[i];
        }
    }
};