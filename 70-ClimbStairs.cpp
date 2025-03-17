
class Solution {
    public:
        int climbStairs(int n) {
                        if(n<=3){
                    return n;
                }
                int n0 = 0;
                int n1 = 1;
                int nN;
                for(int i = 0;i<n;i++){
                    nN = n0 + n1;
                    n0 = n1;
                    n1 = nN; 
                }
                return nN;
        }
    };