
var objectLiterals = () => {

    // variable with initialization

    var salary = 10000

    // function to calculate incremented salary with specified percentage

    var incrementedSalary = (currentSalary, incrementPercentage) => {
        return currentSalary + ((currentSalary * incrementPercentage) / 100)
    }

    // Object literal cration

    var employeeObjectLiteral = {
        "name": "jagadeesh", // direct value 
        "currentSalary": salary,
        "incrementedSalary": incrementedSalary(salary, 30)
    }

    // Get all keys from object

    let keys = Object.keys(employeeObjectLiteral)   // herer keys datatype is array

    // print values using foreach

    /**
     * array.forEach(value, function() {    looing each key in array 
     *   // user defined code
     * })
     */

    // print values in object literal
    
    console.log("======== object literals noraml =========")

    keys.forEach((key) => {
        console.log(key + ": "+ employeeObjectLiteral[key])
    })
}