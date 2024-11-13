#include<bits/stdc++.h>

using namespace std;

class Solution{
    public:
        bool isPalindrome(int n){
            if(n < 10 && n < 0 ){
                return false;
            }
            int cp_value = n;
            int total = 0;
            while(n){
                int caches = n % 10;
                total = caches + total * 10;
                n/=10;
            }
            return cp_value == total ? true : false;
        }
};
