// //Arrow functions does not have implicit binding with this keyword. They rather inherit the context from the parent function

// const Employee = {
//   employeeId: 2398,
//   employeeName: "Alisha C.",
//   city: "Mumbai",
//   logEmployeeInfo: function () {
//     console.log(this);
    
//     setTimeout(
//     ()=> {
//       console.log(this);
//       console.log(
//         "Employee " + this.employeeName + " lives in city " + this.city + "!"
//       );
//     }, 2000);

//   },
// };
// Employee.logEmployeeInfo();
//Arrow functions does not have implicit binding with this keyword. They rather inherit the context from the parent function

const Employee = {
  employeeId: 2398,
  employeeName: "Alisha C.",
  city: "Mumbai",
  logEmployeeInfo: function () {
    console.log(this);
    setTimeout(()=> {
      console.log(this);
      console.log(
        "Employee " + this.employeeName + " lives in city " + this.city + "!"
      );
    }, 2000);
  },
};
Employee.logEmployeeInfo();


// arrow vs closure ?
function travelAgency(managerName){
  console.log('Manager Name is ' + managerName);
  return function(){
    console.log('Manager %s is now transfered to city Delhi!',managerName);
  }
}

var transerCity = travelAgency("Manish Sharma");
//...5 lines
console.log(transerCity());