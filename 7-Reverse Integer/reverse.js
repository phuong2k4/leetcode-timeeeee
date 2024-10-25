
const reverse = (x)=>{
    // Define the maximum and minimum 32-bit signed integer values
    const maxInt = 2147483647;
    const minInt = -2147483648;

    // Convert the integer to a string
    const str = x.toString();

    // Reverse the string and handle the negative sign if present
    const reversedStr = str[0] === '-' 
        ? '-' + str.slice(1).split('').reverse().join('') 
        : str.split('').reverse().join('');

    // Convert the reversed string back to an integer
    const reversedInt = parseInt(reversedStr, 10);

    // Check for overflow and return 0 if it exceeds 32-bit signed integer range
    if (reversedInt > maxInt || reversedInt < minInt) {
        return 0;
    }

    // Return the reversed integer
    return reversedInt;
}

const _jsondata = require("./data.json");
const compare = (result, output)=>{
    const _endcompare = JSON.stringify(result) === JSON.stringify(output);
    console.log(_endcompare);
}
for (ind of _jsondata){
    const {input:{x},output} = ind;
    const indexOfTs = _jsondata.indexOf(ind);
    console.time(`Time Response#${indexOfTs}`);
    const result  = reverse(x);
    console.timeEnd(`Time Response#${indexOfTs}`);

    compare(result,output);
}