#include <bits/stdc++.h>

using namespace std;

struct TreeNode{
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(): val(0), left(nullptr),right(nullptr){};
    TreeNode(int x): val(x), left(nullptr),right(nullptr){};
    TreeNode(int x, TreeNode* left, TreeNode* right): val(x), left(left),right(right){};
};

class Solution{
    public:
    int mindepth(TreeNode* root){
        if(root==NULL){
            return 0;
        }
        int left = mindepth(root->left);
        int right = mindepth(root->right);
        if(left==0) return right + 1;
        if(right==0) return left + 1;
        return min(left, right) + 1;
    }
};