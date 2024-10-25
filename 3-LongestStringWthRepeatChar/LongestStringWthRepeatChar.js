
function compare(calculateResult, defautResult){
    const after_compare = JSON.stringify(calculateResult) === JSON.stringify(defautResult);
    console.log(after_compare);
}



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

var lengthOfLongestSubstring = (s)=>{
    const charPositionMap = new Map();
    const strLength = s.length;

    let longestSubstringLength = 0;

    for(let firstIndex = 0, secondIndex = 0; secondIndex < strLength; secondIndex++) {
        const charAtSecondIndex = s.charAt(secondIndex);
        if(charPositionMap.has(charAtSecondIndex)) {
            firstIndex = Math.max(charPositionMap.get(charAtSecondIndex), firstIndex);
        }

        longestSubstringLength = Math.max(longestSubstringLength, secondIndex - firstIndex +1);
        charPositionMap.set(charAtSecondIndex, secondIndex + 1);
    }
    return longestSubstringLength;
}

const datajson = require("./data.json");

for(let data of datajson){
    const {input : {s},output} = data;
    const indexOfValue = datajson.indexOf(data);
    
    console.time(`Test Case:#${indexOfValue}`);
    const result_when_calculated = lengthOfLongestSubstring(s)
    console.timeEnd(`Test Case:#${indexOfValue}`);

    compare(result_when_calculated,output);
}