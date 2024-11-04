var filter = (arr, fn)=>{
    let newArr = [];
    for (let i = 0 ;i<arr.length;i++){
        if(fn(arr[i],i)){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function greaterThan10(n){
    return n > 10;
}
function firstIndex(n,i){
    return i===0;
}
function flusOne(n){
    return n+1;
}
const newFilter1 = filter([0,10,20,30], greaterThan10);
console.log(newFilter1);

const newFilter2 = filter([1,2,3], firstIndex);
console.log(newFilter2);

const newFilter3 = filter([-2,-1,0,1,2], flusOne);
console.log(newFilter3);

