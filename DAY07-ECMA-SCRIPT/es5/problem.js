// function task1(){
//     setTimeout(function(){
//         return " task 1 completed"
//     },2000);
// }
// console.log('task started');
// var results = task1();
// console.log(results);
// console.log("task1 ends");


function task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task-1 Completed!");
      reject("Found bug in task-1! Not Completed!");
    }, 2000);
  });
}
console.log("Task Started!");
var result = task1();
result.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
).finally(()=>{
    console.log("Task Ended!");
});

