// function overloading with 3 parameters, 1 parameter, 2 parameter & 4 default

function sum(): number;
function sum(a: number): number;
function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;

function sum(a = 10, b = 20, c = 30, d = 40): number {
    return a + b + c + d;
}

console.log(sum());           
console.log(sum(5));          
console.log(sum(1, 2));       
console.log(sum(1, 2, 3));   


// create a demo class within a constructor overloading & method overloading

class Demo {
    constructor();
    constructor(value: string|number|boolean);
    constructor(value: string|number|boolean = "Default") {
        console.log(`${value} constructor Executed`);
    }

    DemoSum(): number;
    DemoSum(a: number): number;
    DemoSum(a: number, b: number): number;
    DemoSum(a: number, b: number, c: number): number;
    DemoSum(a: number = 10, b: number = 20, c: number = 30): number {
        return a + b + c;
    }
}
const d:Demo = new Demo();
console.log(d.DemoSum());
console.log(d.DemoSum(1));
console.log(d.DemoSum(1,2));
console.log(d.DemoSum(4,6,2));

const d1:Demo = new Demo(true);
console.log(d1.DemoSum());
console.log(d1.DemoSum(1));
console.log(d1.DemoSum(1,2));
console.log(d1.DemoSum(99,43,12));

const d2:Demo = new Demo("yash");
console.log(d2.DemoSum());
console.log(d2.DemoSum(1));
console.log(d2.DemoSum(1,2));
console.log(d2.DemoSum(78,789,77));

const d3:Demo = new Demo(99);
console.log(d3.DemoSum());
console.log(d3.DemoSum(1));
console.log(d3.DemoSum(1,2));
console.log(d3.DemoSum(7899,788,99));






// Create Employee Array Interfaces as DS add one optional property
// Define an Employee interface
interface Employee {
  id: number;                // Required
  name: string;              // Required
  department?: string;       // Optional
  phoneNumber?: string;      // Optional
}

// Create an array (data structure) of Employees
const employees: Employee[] = [
  { id: 101, name: "Aman Gupta", department: "Finance" },
  { id: 102, name: "Reetika Kushwaha" }, // department is optional
  { id: 103, name: "Yash Mutatkar", phoneNumber: "9876543210" }
];

// Loop through and print employee info
for (const emp of employees) {
  console.log(
    `ID: ${emp.id}, Name: ${emp.name}, ` +
    `Department: ${emp.department ?? "Not Assigned"}, ` +
    `Phone: ${emp.phoneNumber ?? "N/A"}`
  );
}
