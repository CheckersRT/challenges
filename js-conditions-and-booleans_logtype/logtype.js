let data;

data = 1

switch(typeof(data)) {
    case "string":
    console.log("string!");
    break;
    case "undefined":
    console.log("Undefined!");
    break;
    case "null":
    console.log("Null!");
    break;
    case "NaN":
    console.log("Not a number!");
    break;
    case "boolean":
    console.log("Boolean!");
    break;
    case "bigInt":
    console.log("bigInt!");
    break;
    case "function":
    console.log("Function!");
    break;
    case "object":
    console.log("Object!");
    break;
    case "array":
    console.log("Array!");
    break;
    case "number":
    console.log("Number!");
    break;
            
}
