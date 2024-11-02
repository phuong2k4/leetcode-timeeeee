var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World!";
    }
};

const fn = createHelloWorld();
console.log(fn());