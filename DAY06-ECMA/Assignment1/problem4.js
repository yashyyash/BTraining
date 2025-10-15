// var Employee = {
//     employeeId: 2398,
//     employeeName: "Alisha C.",
//     city: "Mumbai",
//     logemployeeInfo:function(){
//         console.log(`employe id`+this.employeeId+`employee name`+this.employeeName+`emplouyee cotu`+this.city);
//     }
// }

// Employee.logemployeeInfo();

var Employee = {
  employeeId: 2398,
  employeeName: "Alisha C.",
  city: "Mumbai",
  logEmployeeInfo:function(){
    setTimeout(
      function(){
      console.log('Employee ' + this.employeeName + ' lives in city ' + this.city + "!");
    },
    2000);
  }
};
Employee.logEmployeeInfo();








var Employee = {
  employeeId: 2398,
  employeeName: "Alisha C.",
  city: "Mumbai",
  logEmployeeInfo:function(){
    (
      function(){
      console.log('Employee ' + this.employeeName + ' lives in city ' + this.city + "!");
    },
    2000);
  }
};
Employee.logEmployeeInfo();