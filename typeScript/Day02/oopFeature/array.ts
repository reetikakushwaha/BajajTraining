interface Employee {
  employeeId: number;
  name: string;
  department: string;
  salary: number;
  isPermanent?: boolean; 
}

const employees: Employee[] = [
  {
    employeeId: 101,
    name: "Aman Sharma",
    department: "IT",
    salary: 75000,
    isPermanent: true,
  },
  {
    employeeId: 102,
    name: "Reetika Kushwaha",
    department: "HR",
    salary: 65000,
    isPermanent: true,
  }
];

for (const emp of employees) {
  console.log(
    `ID: ${emp.employeeId}, Name: ${emp.name}, Dept: ${emp.department}, Salary: ${emp.salary}, Permanent: ${emp.isPermanent ?? "N/A"}`
  );
}
