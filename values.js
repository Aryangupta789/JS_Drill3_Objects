    // Return all of the values of the object's own properties.
    // Ignore functions
    // http://underscorejs.org/#values

function values(obj) {
    const arr=[];
    for (key in obj){
        arr.push(obj[key])
    }
    return arr

}
module.exports=values