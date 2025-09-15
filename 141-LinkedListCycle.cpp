#include <bits/stdc++.h>

using namespace std;

struct ListNode
{
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution
{
public:
    bool hasCycle(ListNode *head)
    {
        ListNode *firstNode = head;
        ListNode *lastNode = head;
        while (firstNode != nullptr && firstNode->next != nullptr)
        {
            firstNode = firstNode->next->next;
            lastNode = lastNode->next;
            if (firstNode == lastNode)
            {
                return true;
            }
        }
        return false;
    }
};
