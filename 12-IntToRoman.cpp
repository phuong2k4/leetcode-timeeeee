#include<bits/stdc++.h>
#include<iostream>

using namespace std;

class Solution{
    public:
        string intToRoman(int __number__){
            const vector<pair<int , string>> valueSymbol{
                {1000,"M"},{900,"CM"},{500,"D"},
                {400,"CD"},{100,"C"},{90,"XC"},
                {50,"L"},{40,"XL"},{10,"X"},
                {9,"IX"},{5,"V"},{4,"IV"},
                {1,"I"}
            };
            string result;
            for(const auto&[value, symbol] : valueSymbol){
                if (__number__ == 0){
                    break;
                }
                while(__number__ >= value){
                    result += symbol;
                    __number__ -= value;
                }
            }
            return result;
        }
};
