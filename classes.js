
// Class Cration

class Employee {

    // Perameterized constructor
    
    constructor(id, name, marks) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }

    // Function to display student details

    getStudentDetails = () => {
        console.log("======== class calling ===========")
        console.log("Student id : " + this.id + ", name: " + this.name + ", marks: " + this.marks);
    }
}

9618801613