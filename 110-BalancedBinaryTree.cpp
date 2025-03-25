#include<bits/stdc++.h>

using namespace std;

struct TreeNode{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(): val(0), left(nullptr), right(nullptr){};
    TreeNode(int x): val(x), left(nullptr), right(nullptr){};
    TreeNode(int x, TreeNode* left, TreeNode* right): val(x), left(left), right(right){};
};

class Solution{
private:
    int loopback(TreeNode* root){
        if(root==NULL) return 0;
        int left_side = loopback(root->left);
        int right_side = loopback(root->right);
        if(left_side == -1 || right_side==-1 || abs(left_side-right_side)>1)return -1;
        return max(left_side, right_side) + 1;
    }
public:
    bool isBalance(TreeNode* root){
        if(root==NULL){
            return true;
        }
        return loopback(root) == -1 ? false : true;
    }
};