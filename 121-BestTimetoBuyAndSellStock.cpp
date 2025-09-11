#include <bits/stdc++.h>

using namespace std;

class buyAndSell{
    public:
    int maxProfit(vector<int>& prices){
        int buyingStock = prices[0];
        int profit = 0;
        for(int i =1 ;i<prices.size();i++){
            if (buyingStock > prices[i]){
                buyingStock= prices[i];
            }
            profit = max(profit, prices[i] - buyingStock);
        }
        return profit;
    }
};