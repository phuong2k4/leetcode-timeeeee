
Array.prototype.sortedArr = function(func){
    return this.sort((a,b)=>fn(a) - fn(b));
};

function fn(c){
    return c;
}
arr = [2,1,4,6,3,5];
console.log(arr.sortedArr(fn));