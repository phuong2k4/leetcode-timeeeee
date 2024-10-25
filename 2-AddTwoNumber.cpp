#include<iostream>
#include<algorithm>

using namespace std;


 class Solution1 {
 public:
     ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
         int carry = 0;
         ListNode* result = new ListNode(0);
         ListNode* curr = result;
         while(l1||l2||carry){
             int d1 = l1 ? l1->val:0;
             int d2 = l2 ? l2->val:0;
             int sum = d1+d2+carry;
             curr -> next = new ListNode(sum%10);
             curr = curr->next;
             carry = sum/10;
             l1 = l1 ? l1->next : nullptr;
             l2 = l2 ? l2->next : nullptr;
         }
         return result->next;
     }
 };
 
 
 
class Solution2 {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* dummyHead = new ListNode(0);
        ListNode* tail = dummyHead;
        int carry = 0;

        while (l1 != nullptr || l2 != nullptr || carry != 0) {
            int digit1 = (l1 != nullptr) ? l1->val : 0;
            int digit2 = (l2 != nullptr) ? l2->val : 0;

            int sum = digit1 + digit2 + carry;
            int digit = sum % 10;
            carry = sum / 10;

            ListNode* newNode = new ListNode(digit);
            tail->next = newNode;
            tail = tail->next;

            l1 = (l1 != nullptr) ? l1->next : nullptr;
            l2 = (l2 != nullptr) ? l2->next : nullptr;
        }

        ListNode* result = dummyHead->next;
        delete dummyHead;
        return result;
    }
};





