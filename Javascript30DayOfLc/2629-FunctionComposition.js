var map = (functions)=>{
    if(functions.length===1){
        return function(n){
            return n;
        }
    }
    return functions.reduceRight((left,right)=>{
        return function(n){
            return right(left(n));
        }
    })
}

const newMap = map([x=>x+1,x=>x*x,x=>2*x]);
console.log(newMap(4))
