
function compare(calculateResult, defautResult){
    const after_compare = JSON.stringify(calculateResult) === JSON.stringify(defautResult);
    console.log(after_compare);
}

const datajson = require("./data.json");

var lengthOfLongestSubstring = (s)=>{
    const charCountingArr = []; //size: min(s.length, 128) 128: ascii char
    let leftIndex = 0, rightIndex = 0;

    let longestSubstringLength = 0;

    while (rightIndex < s.length) {
        const asciiValueOfCharAtRight = s.charCodeAt(rightIndex);

        const numberOfCharAtRight = charCountingArr[asciiValueOfCharAtRight];
        charCountingArr[asciiValueOfCharAtRight] = isNaN(numberOfCharAtRight) ? 1 : numberOfCharAtRight + 1;

        while (charCountingArr[asciiValueOfCharAtRight] > 1) {
            const asciiValueOfCharAtLeft = s.charCodeAt(leftIndex);
            charCountingArr[asciiValueOfCharAtLeft]--;
            leftIndex++;
        }

        longestSubstringLength = Math.max(longestSubstringLength, (rightIndex - leftIndex + 1));

        rightIndex++;
    }
    return longestSubstringLength;
}

for(let data of datajson){
    const {input : {s},output} = data;
    const indexOfValue = datajson.indexOf(data);
    
    console.time(`Test Case:#${indexOfValue}`);
    const result_when_calculated = lengthOfLongestSubstring(s)
    console.timeEnd(`Test Case:#${indexOfValue}`);

    compare(result_when_calculated,output);
}