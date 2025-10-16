// const BajajOffices : string[] = ["banglore","chennai","chennai","hyderabad","mumbai"];

// for (const office of BajajOffices){
//     console.log(office);
// }


const BajajOffices : (string|number)[] =["banglore",400605,"pune",7888];
for(const ofc of BajajOffices){
    console.log(ofc);
}


// create a function square annotate paramaetr and return type

const num1: number = 10;
const num2: number = 100;

const a = function(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(a(num1, num2)); // Output: 110
