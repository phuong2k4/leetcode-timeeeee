var createCounter = function(init) {
    let duplicate = init;
    return {
        increment(){
            return init + 1;
        },
        reset(){
            init = duplicate;
            return init;
        },
        decrement(){
            return init-1;
        }
    }
};


const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4