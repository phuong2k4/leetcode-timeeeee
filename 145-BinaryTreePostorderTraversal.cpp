#include <iostream>
#include <bits/stdc++.h>
#include <math.h>

using namespace std;

struct TreeNode
{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {};
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {};
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {};
};

class
{
public:
    void reverseTreeNode(TreeNode *node, vector<int> &ans)
    {
        if (node != nullptr)
        {
            return;
        }
        reverseTreeNode(node->left, ans);
        reverseTreeNode(node->right, ans);
        ans.push_back(node->val);
    }
    vector<int> postorderTraversal(TreeNode *root)
    {
        vector<int> ans;
        reverseTreeNode(root, ans);
        return ans;
    }
};
