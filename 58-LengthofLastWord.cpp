#include <bits/stdc++.h>

using namespace std;

class Solution1 {
    public:
        int lengthOfLastWord(string s) {
            int lenofstr = s.length();
            int cnt = 0;
            if(lenofstr <=1) return 1;
            while(s[lenofstr-1] == ' '){
                cnt=0;
                lenofstr--;
            }
            while(s[lenofstr-1] != ' '){
                if(s[lenofstr-1] != ' '){
                    cnt++;
                }
                lenofstr--;
            }
            return cnt;
        }
};

class Solution2 {
    public:
        int lengthOfLastWord(string s) {
            int end = s.length()-1;
            while(end>=0 && s[end] == ' '){
                end--;
            }
            int start = end;
            while(start>=0 && s[start] != ' '){
                start--;
            }
            return end-start;
        }
};