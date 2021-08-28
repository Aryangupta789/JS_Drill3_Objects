    // Returns a copy of the object where the keys have become the values and the values the keys.
    // Assume that all of the object's values will be unique and string serializable.
    // http://underscorejs.org/#invert
function invert(obj) {
    const invertedObj={};
    for(key in obj){
        invertedObj[obj[key]]=key;
    }
    return invertedObj;
}
module.exports=invert