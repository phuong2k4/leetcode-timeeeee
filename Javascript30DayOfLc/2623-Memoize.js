const memoize = (func)=>{
    const caches = {};
    return function(...args){
        const key = String(args);
        if(key in caches){
            return caches[key];
        }
        const result = func(...args);
        caches[key] = result;
        return result;
    }
} 

const sum = (a,b)=>{
    return a+b;
};
const factorial = (n) => {
    if(n == 2 ){
        return 2;
    }
    return n * factorial(n-1);
}
const fibonacci = (n)=>{
    if (n === 0 || n === 1){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(4))

const valueSum = [[2,2], [2,2], [], [1,2],[]];
const memoizeSum = memoize(sum);
console.log(memoizeSum(2,2));
console.log(memoizeSum(2,2));

const valueFac = [[2],[3],[2],[],[3],[]];
const memoFactorial = memoize(factorial);
console.log(memoFactorial(2));
console.log(memoFactorial(3));
console.log(memoFactorial(2));

const valueFibo = [[5],[]];
const memoFibonacci = memoize(fibonacci);
console.log(memoFibonacci(5));
console.log(memoFibonacci());