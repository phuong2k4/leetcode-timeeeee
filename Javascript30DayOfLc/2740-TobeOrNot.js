var expect = function(val) {
    return {
        toBe(nums){
            if(nums!==val){
                throw new Error("Not Equal");
            }
            return true;
        },
        notToBe(nums){
            if(nums!==val){
                return true
            }
            throw new Error("Equal");
        }
    }
};

expect(5).toBe(5);
expect(5).notToBe(5);
