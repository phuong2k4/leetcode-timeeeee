const map = (arr, fn)=>{
    let newArr = [];
    for(let i = 0;i< arr.length;i++){
        newArr.push(fn(arr[i],i));
    }
    return newArr;
}

function plusSome(n){
    return n + 1;
}

function plusI(n, i){
    return n + i;
}

function constant(){
    return 43;
}
const newTransformArr1 = map([1,2,3], plusSome)
console.log(newTransformArr1);
const newTransformArr2 = map([1,2,3], plusI);
console.log(newTransformArr2);
const newTransformArr3 = map([10,20,30], constant);
console.log(newTransformArr3);