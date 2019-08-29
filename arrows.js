
// Note: If you want to perform dbclick event comment line no 23

// Getting HTMLElement reference by Element Id

let button = document.getElementById('btnOne');

//button.addEventListener("click", clickHanlder)

var clickHanlder = function(event) {
    
}

// Register click event on button (btnOne) using reggular function

var clickArrowHandler = (event) => {
    let input = document.getElementById('inputValue')
    alert("Double clicked value : " + input.value)
}

// Create function for object cration and method calling of Employee class

var callGetStudentDetails = (event) => {
    
    // Create object for Employee Class

    var emp = new Employee(01, 'jagadeesh', 637);

    // Calling class method using emp object (refrence)

    emp.getStudentDetails();
}

// Print object literal data

var getObjectLiteralData = () => {

    // direct calling method of outside of current file 

    objectLiterals();   
}

var callingTemplateStrings = () => {

    // Calling template strings functionality from other js file

    printTemplateString(26, 'jagadeesh', 1674);
}

// destructuring

var callingDesturing = () => {

    // Calling destructuring function available in destructuring.js

    destructuringExample();
}

// Default + Rest + Spread

var callingDefaultAndRestAndSpread = () => {

    // Calling Default + Rest + Spread functionality from default_rest_spread.js

    initializeFunctions();
}

button.addEventListener("click", clickHanlder)
button.addEventListener("dblclick", clickArrowHandler)



