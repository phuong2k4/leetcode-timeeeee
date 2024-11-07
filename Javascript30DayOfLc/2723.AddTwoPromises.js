
const promise1 = new Promise(resolve => setTimeout(()=>{resolve(2),20}));
const promise2 = new Promise(resolve => setTimeout(()=>{resolve(5),60}));

const addTwoPromises = async (promise1,promise2)=>{
    const [val1, val2] = await Promise.all(promise1,promise2);
    return val1 + val2; 
}

addTwoPromises(promise1,promise2).then(console.log)