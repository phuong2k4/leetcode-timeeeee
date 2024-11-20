var debounce = (fn, t)=>{
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(()=>{fn(...args)},t);
    }
}

let start = Date.now();
function log(...input){
    console.log([Date.now() - start, input]);
}

const dlog = debounce(log, 50);
setTimeout(()=>dlog(1), 50);
setTimeout(()=>dlog(2), 75);