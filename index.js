// Write your solution in this file!
let employee = {
    name: "Michael Davis",
    streetAddress: "1000 Something St.",
}

function updateEmployeeWithKeyAndValue(object, key, value) {
    const newObj = {...object};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue (object, key, value) {
    object[key] = value;
    return object;
}

function deleteFromEmployeeByKey (object, key) {
    let newObj = {...object};
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey (object, key) {
    delete object[key];
    return object;
}