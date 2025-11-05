#include<bits/stdc++.h>

using namespace std;

class Solution {
public:
		bool isHappy(int n){
            if(n==1 || n == 7){
                return true;
            }else if(n < 10){
                return false;
            }
			int count = 0;
			while (n){
                int temp = n % 10;
				count += pow(temp,2);
				n/=10;
			}
            return isHappy(count);
		}
};

int main(){
    Solution s;
    int n;
    cin >> n;
    if(s.isHappy(n)){
        cout << "So Hop le.";
    }else{
        cout << "So khong hop le.";
    }
    return 0;
}