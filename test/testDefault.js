const defaults=require("../default")
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const defaultProps={"comic":"DC", "Student":"Robin"}

console.log(defaults(testObject,defaultProps))