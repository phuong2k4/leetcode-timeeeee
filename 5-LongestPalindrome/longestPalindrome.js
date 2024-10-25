function isSubstringStillAPalindrome(originalStr, left, right) {
    const isLeftInbound = left >= 0;
    const isRightInbound = right < originalStr.length;
  
    const areLeftAndRightValueTheSame = originalStr[left] == originalStr[right];
  
    return isLeftInbound && isRightInbound && areLeftAndRightValueTheSame;
  }
  
  function getPalindromeSubstringAt(originalStr, left, right) {
    while(isSubstringStillAPalindrome(originalStr, left, right)) {
      left--;
      right++;
    }
  
    return originalStr.substring(left + 1, right);
  }
  
  function getLongestStr(arr) {
    return arr.reduce((firstStr, secondStr) => {
      return firstStr.length > secondStr.length ? firstStr : secondStr;
    });
  }
  
  var longestPalindrome = function(originalStr) {
      let result = "";
  
    for(let i = 0; i < originalStr.length; i++) {
      const oddPalindromeStr = getPalindromeSubstringAt(originalStr, i, i);
      const evenPalindromeStr = getPalindromeSubstringAt(originalStr, i, i + 1);
  
      result = getLongestStr([result, oddPalindromeStr, evenPalindromeStr]);
    }
  
    return result;
  };

console.log("====================================")

function longestPalindrome(s) {
  // Initialize variables to store the longest palindrome found
  let maxLength = 0;
  let longestPal = '';

  // Iterate over each character in the string as the starting point
  for (let i = 0; i < s.length; i++) {

      // Iterate over each character from the starting point to the end of the string
      for (let j = i; j < s.length; j++) {

          // Extract the substring from the current starting point to the current ending point
          let subStr = s.substring(i, j + 1);

          // Check if the current substring is a palindrome
          if (isPalindrome(subStr)) {

              // If the current palindrome is longer than the previously found longest, update the longest
              if (subStr.length > maxLength) {
                  maxLength = subStr.length;
                  longestPal = subStr;
              }
          }
      }
  }

  // Return the longest palindromic substring found
  return longestPal;
}

// Helper function to check if a given string is a palindrome
function isPalindrome(str) {

  // Compare the string with its reverse
  return str === str.split('').reverse().join('');
}

//----------compare result-----------
const dataJson = require("./data.json");

const compare = (result,output)=>{
    const afterComparision = JSON.stringify(result) === JSON.stringify(output);
    console.log(afterComparision);
}

for(data of dataJson){
    const {input:{s},output} = data;
    const indexOfTestcase = dataJson.indexOf(data);
    console.time(`Test Case#${indexOfTestcase}`)
    const result = longestPalindrome(s);
    console.timeEnd(`Test Case#${indexOfTestcase}`)

    compare(result,output);
}