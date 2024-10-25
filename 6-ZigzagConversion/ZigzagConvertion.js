const _datajson = require("./data.json");

var compare = (result, output)=>{
    const after_compare = JSON.stringify(result) === JSON.stringify(output);
    console.log(after_compare);
}


var convert = (s,numRows) =>{
    if (numRows == 1) return s;
	
	let result = "";
	
	const length = s.length;
	const cycleLength = 2 * numRows - 2;
	
	for (let i = 0; i < numRows; i++) {
		for (let j = 0; j + i < length; j += cycleLength) {
			result += s.charAt(j + i);
			
			const notFirstRow = i != 0;
			const notLastRow = i != numRows - 1;
			const nextMiddleCharInbound = j + cycleLength - i < length;
			
			if (notFirstRow && notLastRow && nextMiddleCharInbound) {
				result += s.charAt(j + cycleLength - i);
			}
		}
	}
	
	return result;
}

for(data of _datajson){
    const {input: {s,numRows},output} = data;
    const indexOfTs = _datajson.indexOf(data);

    console.time(`Time Response:${indexOfTs}`);
    const result = convert(s,numRows);
    console.timeEnd(`Time Response:${indexOfTs}`);

    compare(result, output);
}