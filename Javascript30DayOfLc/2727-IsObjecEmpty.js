var isEmptyObject = ()=>{
    return function(obj){
        if(Array.isArray(obj)){
            return obj.length === 0;
        }
        return Object.keys(obj).length === 0;
    }
}

const checkObject = isEmptyObject();
console.log(checkObject([]));



