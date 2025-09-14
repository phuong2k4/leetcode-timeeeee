#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    bool isPalindrome(string s)
    {
        string filtered;
        for (char c : s)
        {
            if (isalnum(c))
            {
                filtered += tolower(c);
            }
        }
        int l = 0;
        int r = filtered.size() - 1;
        while (l < r)
        {
            if (filtered[l] != filtered[r])
            {
                return false;
            }
            else
            {
                l++;
                r--;
            }
        }
        return true;
    }
};