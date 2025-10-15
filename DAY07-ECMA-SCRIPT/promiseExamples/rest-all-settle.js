const task1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("Task-1 Completed!");
    reject("Task-1 has bug! Failed to complete!");
  }, 1000);
});
const task2 = new Promise((resolve, reject) => {
  setTimeout(() => {
     resolve("Task-2 Completed!");
    //reject("Task-2 has bug! Failed to complete!");
  }, 750);
});
const task3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task-3 Completed!");
  }, 2000);
});

// Promise.race([task1, task2, task3]).then(
//   (value) => console.log(value),
//   (reason) => console.log(reason)
// );
// Promise.all([task2, task1, task3]).then(
//   (value) => console.log(value),
//   (reason) => console.log(reason)
// );
Promise.allSettled([task2, task1, task3]).then(
  (value) => console.log(value),
  (reason) => console.log(reason)
);