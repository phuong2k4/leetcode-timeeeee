var reduce = (arr,init, fn)=>{
    let result = init;
    for (let i = 0;i<arr.length;i++){
        init = fn(init,arr[i]);
    }
    if(init === 0){
        return result;
    }else{
        return init;
    }
}

function sum1(accum, curr){
    return accum + curr;
}

function sum2(accum, curr){
    return accum + curr * curr;
}

function sum3(accum,curr){
    return 0;
}

const newReduce1 = reduce([1,2,3,4],0,sum1);
console.log(newReduce1);

const newReduce2 = reduce([1,2,3,4],100,sum2);
console.log(newReduce2);

const newReduce3 = reduce([1,2,3,4],100,sum3);
console.log(newReduce3);
