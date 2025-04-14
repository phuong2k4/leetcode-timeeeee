#include<bits/stdc++.h>

using namespace std;

class Solution{
    vector<int> getRow(int rowIndex){
        vector<int> result;
        if(rowIndex==1) return {1,1};
        if(rowIndex == 0 ) return {1};
        result = {1};
        for(int i = 1;i<rowIndex;i++){
            vector<int> newRow(i+1,1);
            for(int j = 1;j<i;j++){
                newRow[j] = result[j-1] + result[j];
            }
            result = newRow;
        }
        return result;
    }
};