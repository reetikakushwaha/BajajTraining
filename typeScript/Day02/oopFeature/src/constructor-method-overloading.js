"use strict";
class Student {
    studentId;
    name;
    course;
    constructor(id, name, course) {
        this.studentId = id ?? 0;
        this.name = name ?? "Unknown";
        this.course = course ?? "Not Assigned";
    }
    display() {
        console.log(`ID: ${this.studentId}, Name: ${this.name}, Course: ${this.course}`);
    }
}
const s1 = new Student();
const s2 = new Student(101);
const s3 = new Student(102, "Aman");
const s4 = new Student(103, "Reetika", "TypeScript");
s1.display();
s2.display();
s3.display();
s4.display();
//# sourceMappingURL=constructor-method-overloading.js.map