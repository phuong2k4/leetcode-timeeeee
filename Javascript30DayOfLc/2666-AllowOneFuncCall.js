const once = (fn)=>{
    let result;
    let und = false;
    return function(...args){
        if(und){
            return undefined;
        }else{
            result = fn(...args);
            und = true;
            return result;
        }
    }
}

const fn = (a,b,c)=>{
    return a+b+c;
}
const onceFn = once(fn);
console.log(onceFn(1,2,3));
console.log(onceFn(1,2,3));