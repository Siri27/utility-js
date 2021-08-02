const reduce= (arr,func,initial)=>{
    if(arr.length==0 && initial==undefined ) return undefined;
    else if(initial==undefined) return arr.reduce(func);
    return arr.reduce(func,initial);
}
module.exports=reduce;