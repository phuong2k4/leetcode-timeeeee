const cancelable = (fn, args, t)=>{
    const timeOut = setTimeout(()=>{
        fn(...args)
    },t);
    const clearTimeOut = ()=>{clearTimeOut(timeOut)};
    return clearTimeOut;
}
const cancelTimeMs = 50;
const cancleFn = cancelable((x)=>{x*5}, [3], 20);
setTimeout(cancleFn, cancelTimeMs)