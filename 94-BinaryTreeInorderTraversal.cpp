#include<bits/stdc++.h>

using namespace std;

struct TreeNode{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(): val(0), left(nullptr), right(nullptr){};
    TreeNode(int x): val(x), left(nullptr), right(nullptr){};
    TreeNode(int x, TreeNode *left, TreeNode* right): val(x), left(left), right(right){};
};

class Solution{
    private:
        void inorder(TreeNode* node, vector<int>&res){
            if(!node){
                return;
            }
            inorder(node->left, res);
            res.push_back(node->val);
            inorder(node->right,res);
        }
    public:
        vector<int> inorderTraversel(TreeNode* root){
            vector<int> result;
            inorder(root, result);
            return result;
        }
};
