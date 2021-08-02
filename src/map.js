const map= (arr,func) => {
    if(arr.length==0) return arr;
    return arr.map(func);
};
module.exports=map;