const cancelable = (fn, args, timeI)=>{
    const timeInterval = ()=>{
        setInterval(() => {
            fn(...args);
        }, timeI);
    }
    const clearInterval = ()=>{
        clearInterval(timeInterval);
    }
    return clearInterval;
}

