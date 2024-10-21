const findMedianSortedArrays = (nums1, nums2)=>{
    const total = nums1.length + nums2.length;
    const half = Math.round(total / 2);

    let shorterArr, longerArr;

    if(nums1.length > nums2.length) {
        shorterArr = nums2;
        longerArr = nums1;
    } else {
        shorterArr = nums1;
        longerArr = nums2;
    }

    let left = 0;
    let right = shorterArr.length - 1;

    while(true) {
        const middleIndexOfShorterArr = Math.floor((right + left) / 2);

        const middleIndexOfLongerArr = half - middleIndexOfShorterArr - 2;
        
        const rightMostValueOfLeftPartitionOfShorterArr = middleIndexOfShorterArr >= 0 ? shorterArr[middleIndexOfShorterArr] : Number.NEGATIVE_INFINITY;

        const isRightPartitionOfShorterArrAvailable = (middleIndexOfShorterArr + 1) < shorterArr.length;
        const leftMostValueOfRightPartitionOfShorterArr = isRightPartitionOfShorterArrAvailable 
        ? shorterArr[middleIndexOfShorterArr + 1] 
        : Number.POSITIVE_INFINITY;
        
        const rightMostValueOfLeftPartitionOfLongerArr = middleIndexOfLongerArr >= 0 ? longerArr[middleIndexOfLongerArr] : Number.NEGATIVE_INFINITY;

        const isRightPartitionOfLongerArrAvailable = (middleIndexOfLongerArr + 1) < longerArr.length;
        const leftMostValueOfRightPartitionOfLongerArr = isRightPartitionOfLongerArrAvailable
        ? longerArr[middleIndexOfLongerArr + 1]
        : Number.POSITIVE_INFINITY;

        // Xong bước tạo partition, giờ check xem đúng chưa

        if(rightMostValueOfLeftPartitionOfShorterArr <= leftMostValueOfRightPartitionOfLongerArr 
        && rightMostValueOfLeftPartitionOfLongerArr <= leftMostValueOfRightPartitionOfShorterArr) {
        if(total % 2 !== 0) {
            return Math.max(rightMostValueOfLeftPartitionOfShorterArr, rightMostValueOfLeftPartitionOfLongerArr);
        } else {
            return (Math.min(leftMostValueOfRightPartitionOfShorterArr, leftMostValueOfRightPartitionOfLongerArr) 
            + Math.max(rightMostValueOfLeftPartitionOfShorterArr, rightMostValueOfLeftPartitionOfLongerArr)) / 2;
        }
        } else if(rightMostValueOfLeftPartitionOfShorterArr > leftMostValueOfRightPartitionOfLongerArr) {
        right = middleIndexOfShorterArr - 1;
        } else {
        left = middleIndexOfShorterArr + 1;
        }
    }
}

function selectionSort(nums){
    for(let i = 0;i<nums.length;i++){
        let min = i;
        for(let j = i+1;j<nums.length;j++){
            if(nums[j] < nums[min]){
                min = j;
            }
        }
        let temp = nums[i];
        nums[i] = nums[min];
        nums[min] = temp;
    }
}

var findMedianSortedArrays1 = (nums1, nums2) => {
    const newArr = [];

    for(let i = 0;i < nums1.length ;i++){
        newArr.push(nums1[i])
    }
    for(let i = 0; i < nums2.length;i++){
        newArr.push(nums2[i])
    }
    selectionSort(newArr);
    const middleIndexValue = parseInt(newArr.length/2);

    return newArr.length % 2 == 1 ? newArr[middleIndexValue] : (newArr[middleIndexValue-1] + newArr[middleIndexValue]) / 2;
};


const _datajson = require("./data.json");

function compare(solveResult, defaultOutput){
    const resultAfterCompare = JSON.stringify(solveResult) === JSON.stringify(defaultOutput);
    console.log(resultAfterCompare); 
}

for(let data of _datajson){
    const {input : {nums1, nums2}, output} = data;
    const indexOfValue = _datajson.indexOf(data);

    console.time(`Test Case:#${indexOfValue}`);
    const total = findMedianSortedArrays1(nums1, nums2);
    console.timeEnd(`Test Case:#${indexOfValue}`);

    compare(total, output);
}
