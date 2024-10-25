
const findMedianSortedArrays = (nums1, nums2)=>{
    const arrayMerged = merge(nums1,nums2);
    const half = Math.floor(arrayMerged.length / 2);

    return arrayMerged.length % 2 != 0 ? arrayMerged[half] : (arrayMerged[half-1] + arrayMerged[half])/2;
}

const merge = (arrf, arrl)=>{
    let i = 0, j = 0;
    const arrayAfterMerge = [];

    while(i < arrf.length && j < arrl.length){
        if(arrf[i] < arrl[j]){
            arrayAfterMerge.push(arrf[i]);
            i++;
        }
        else{
            arrayAfterMerge.push(arrl[j]);
            j++;
        }
    }
    while(i<arrf.length){
        arrayAfterMerge.push(arrf[i]);
        i++;
    }
    while(j< arrl.length){
        arrayAfterMerge.push(arrl[j]);
        j++;
    }

    return arrayAfterMerge;
}

const a = [3,1,4,5,6];
const b = [8,7,2,9,1];

const arr1AfSort = a.sort();
const arr2AfSort = b.sort();

const result = findMedianSortedArrays(arr1AfSort,arr2AfSort);
console.log(result)



console.log("=================================================");

const longestSubstringWthRepeatChar = (s)=>{
    const arrStorageChar = [];
    let left = 0, right = 0; 
    let countingSubstringHasntSameChar = 0;

    while(right < s.length){
        const asciiCharR = s.charCodeAt(right);
        const ifArrRealyHasCharR = arrStorageChar[asciiCharR];

        arrStorageChar[asciiCharR] = isNaN(ifArrRealyHasCharR) ? 1 : arrStorageChar[asciiCharR] + 1;

        while(arrStorageChar[asciiCharR] > 1){
            const asciiCharL = s.charCodeAt(left);
            arrStorageChar[asciiCharL]--;
            left++;
        }
        countingSubstringHasntSameChar = Math.max(countingSubstringHasntSameChar, (right -left + 1));
        right++;
    }
    console.log(arrStorageChar);
    
    return countingSubstringHasntSameChar;
}

const longestSubstringWthRepeatChar1 = (s)=>{
    const arrMap = new Map();
    const lengthOfString = s.length;
    let longestSubstringFound = 0;

    for (let firstInd = 0, secondInd = 0 ; secondInd < lengthOfString; secondInd++){
        const charAtInd = s.charAt(secondInd);
        if(arrMap.has(charAtInd)){
            firstInd = Math.max(arrMap.get(charAtInd), firstInd);
        }
        longestSubstringFound = Math.max(longestSubstringFound, (secondInd - firstInd + 1));
        arrMap.set(charAtInd , secondInd+1);
    }
    return longestSubstringFound;
}
console.log(longestSubstringWthRepeatChar1("abcabcbb"));

