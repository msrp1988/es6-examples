
// Function for default parameters

var defaultParamsFunction = (a, b=15) => {
    
    console.log(`
        The sum is : ${a+b}
    `)
}

// Function for rest parameters

var restParamsFunction = (studentName, ...subjects) => {

    console.log(`Student Name: ${studentName}`)

    subjects.forEach((subject) => {
        console.log(subject)
    })
}

//Function for Spread parameters

var spreadParamsFunction = (studentId, studentName, marks) => {
    console.log(`
        StudentId: ${studentId}
        StudentName: ${studentName}
        Marks: ${marks}
    `)
}

// Calling default + rest + spread functions

var initializeFunctions = () => {

    console.log("============ Default + Rest + Spread ============")
    
    defaultParamsFunction(3)
    restParamsFunction('siva', 'telugu', 'english', 'tamil', 'maths', 'science', 'social');
    spreadParamsFunction(...[26, 'jagadeesh', '637']);
}
