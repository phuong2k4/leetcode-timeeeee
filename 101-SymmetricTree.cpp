#include<bits/stdc++.h>

struct TreeNode{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(): val(0), left(nullptr), right(nullptr){};
    TreeNode(int x): val(x), left(nullptr), right(nullptr){};
    TreeNode(int x, TreeNode* left, TreeNode *right): val(x), left(left), right(right){};
};

class Solution{
    public:
        bool checkTree(TreeNode* left, TreeNode* right){
            if(!left&&!right){
                return true;
            }
            if(!left||!right){
                return false;
            }
            return left->val==right->val && checkTree(left->left, right->right) 
            && checkTree(left->right, right->left);
        }
        bool isSymmetric(TreeNode* root){
            return checkTree(root->left, root->right);
        }
};