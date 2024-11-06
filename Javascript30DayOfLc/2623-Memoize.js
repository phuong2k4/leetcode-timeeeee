const memoize = (func)=>{
    const caches = {};
    return function(...args){
        const key = String(args);
        if(key in caches){
            return caches[key];
        }

        const result = func(...args)
        caches[key] = result;
        return result;
    }
} 

const sum = (a,b)=>{a+b};
const factorial = (n) => {
    if(n == 2 ){
        return 2;
    }
    return n * factorial(n-1);
}
const fibonacci = (n)=>{
    if(n <= 1 ){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

const value = [[2,2], [2,2], [], [1,2],[]];
const memoizeSum = memoize(sum);
console.log(memoizeSum(2,2));
