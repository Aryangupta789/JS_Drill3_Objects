    // Convert an object into a list of [key, value] pairs.
    // http://underscorejs.org/#pairs
function pairs(obj) {
    const arr=[];
    for (key in obj){
        arr.push([key,obj[key]]);
    }
    return arr
}
module.exports=pairs