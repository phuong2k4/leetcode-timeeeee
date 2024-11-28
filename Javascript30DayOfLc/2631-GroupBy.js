
Array.prototype.groupBy = function(func){
    const ans = {};
    for(let ele of this){
        const key = func((ele));
        ans[key] ||= [];
        ans[key].push(ele);
    }
    return ans
}

arr = [
    {"id":"1"},
    {"id":"2"},
    {"id":"3"},
]

let fn = function (item){
    return item.id;
}
arr.groupBy(fn)