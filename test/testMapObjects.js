const mapObject=require("../mapObject")
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
 
function cb(val){
    return "mapped " + val
}
console.log(mapObject(testObject,cb));
