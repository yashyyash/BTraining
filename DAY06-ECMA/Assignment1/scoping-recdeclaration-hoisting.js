// let and const
// 1 > BLOCK LEVEL SCOPE
{
    let companyName = "BAJAJ FINSERV";
} if (true) {
    let num1 = 1000;
}
for(let i = 0 ; i < 5; i++){
    // some logic
}
// console.log(i);

{
    let num2 = 100;
}

// redeclaration within the same scope is not allowed
// let num2 = 100;
// let num2 = "pravin";

//console.log(company name) //hoisted in TDZ[Temporal Dead Zone]
let companyName = "Synechron pvt ltd.";


const Pi= 3.14;
// Pi = 12; // type error: assignment to constant variable

const offices = ["Banglore","chennai","Mumbai",[]];
offices.push("Pune");
console.log(offices);