class Student {
    static collegeName = "PW AT Batch";

    constructor(name) {
        this.name = name;
    }
    static display() { // static method
        console.log(this.name + " are part of the ", Student.collegeName)
    }
}

let amit = new Student("amit");// amit is an object of the Student class
let miti_jha = new Student("miti_jha");
let sumu = new Student("sumu");
let padmini = new Student("padmini");

console.log(Student.collegeName);//static var accessed using class name
console.log(amit.name);//instance variable accessed using object name
console.log(miti_jha.name);//instance variable accessed using object name