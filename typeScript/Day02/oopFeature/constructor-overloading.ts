class Student {
  studentId: number;
  name: string;
  course: string;

  constructor();
  constructor(id: number);
  constructor(id: number, name: string);
  constructor(id: number, name: string, course: string);

  constructor(id?: number, name?: string, course?: string) {
    this.studentId = id ?? 0;
    this.name = name ?? "Unknown";
    this.course = course ?? "Not Assigned";
  }

   displayInfo(): void;
  displayInfo(showCourse: boolean): void;
  displayInfo(customMessage: string, showCourse?: boolean): void;

  displayInfo(param1?: string | boolean, param2?: boolean): void {
    let message = `ID: ${this.studentId}, Name: ${this.name}`;

    if (typeof(param1) === "boolean") {
      if (param1) message += `, Course: ${this.course}`;
    }

    if (typeof(param1) === "string") {
      message = `${param1} - ID: ${this.studentId}, Name: ${this.name}`;
      if (param2) message += `, Course: ${this.course}`;
    }

    console.log(message);
  }
}

const s1 = new Student();
const s2 = new Student(101);
const s3 = new Student(102, "Aman");
const s4 = new Student(103, "Reetika", "TypeScript");

s1.displayInfo();                        
s2.displayInfo(true);                  
s3.displayInfo("Custom Message");        
s4.displayInfo("Student Details", true);