//Arrow functions does not have implicit binding with this keyword. They rather inherit the context from the parent function

const Employee = {
    employeeId: 2398,
    employeeName: "Alisha C.",
    city: "Mumbai",
    logEmployeeInfo: function () {
        console.log(this);
        setTimeout(() => {
            console.log(this);
            console.log(
                "Employee " + this.employeeName + " lives in city " + this.city + "!"
            );
        }, 2000);
    },
};
//Employee.logEmployeeInfo();

const msg = () => console.log("Welcome To Bajaj!");
msg();


const square = (num) => num * num;
console.log(square(67));


const salesNetProfit = (
    cogs,
    expense = 15000,
    actualSales,
    gstPercent = 0
) => {
    const gstAmount = (actualSales * gstPercent) / 100;
    return actualSales - (cogs + expense + gstAmount);
};

console.log(
    `Sales Net Profit with GST - ${salesNetProfit(12000, undefined, 150000, 10)}`
);
console.log(
    `Sales Net Profit without GST - ${salesNetProfit(12000, undefined, 150000)}`
);
