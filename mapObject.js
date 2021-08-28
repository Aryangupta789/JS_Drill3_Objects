   // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
    // http://underscorejs.org/#mapObject
function mapObject(obj, cb) {
    const newObject={};
    for (key in obj){
        newObject[key]=cb(obj[key]);

    }
    return newObject
 
}
module.exports=mapObject