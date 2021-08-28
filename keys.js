// Retrieve all the names of the object's properties.
    // Return the keys as strings in an array.
    // Based on http://underscorejs.org/#keys
function keys(obj) {
    let arr=[];
    for (key in obj){
        arr.push(key)
    }
    return arr
}
module.exports=keys