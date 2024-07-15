
// This is a Promise in JavaScript. A Promise is an object that represents the eventual completion or rejection of an asynchronous operation. It allows you to handle asynchronous tasks in a more efficient way.

// Asynchronous programming is a form of programming where the execution of a program is not restricted by the completion of a particular task. It is used to perform tasks that may take a long time or are not dependent on the current function. This is achieved by using callbacks, event handlers, or promises.

// Synchronous programming, on the other hand, is a form of programming where the execution of a program is restricted by the completion of a particular task. The program will wait until the task is completed before moving on to the next task. This is achieved by using sequential execution or blocking.

const firstPromise = new Promise((resolve, reject) => {
   setTimeout(() => {
      const user = [{
         name: "Raj Nirala",
         age: 20,
         roll: "Full stack developer",
         hobbies: [
            "Music",
            "Football",
            "Coding",
            "Reading"
         ]
      }]
      if (user) {
         resolve(user)
      } else {
         reject("ERROR: Something went wrong");
      }
   }, 1000);

})


// first method to handle promise

// firstPromise.then((data) => {
//    console.log(data)
// }).catch((error) => {
//    console.log(error)
// }).finally(() => {
//    console.log("promise done")
// })


// Second method to handle promise. This method uses the async/await syntax to handle the promise in a more readable way.
// The async keyword is used to define an asynchronous function. The await keyword is used to wait for the promise to resolve or reject.
// The try/catch block is used to handle any errors that may occur during the execution of the asynchronous code.
// The finally block is used to run code after the try/catch block has completed, regardless of whether an error occurred or not.
async function secondMethod() {
   try {
      // The await keyword is used to wait for the firstPromise to resolve. The resolved value is stored in the 'data' variable.
      const data = await firstPromise

      // The resolved value of the promise is logged to the console.
      console.log(data)
   } catch (error) {
      // If an error occurs during the execution of the promise, the error is logged to the console.
      console.log(error)
   } finally {
      // The finally block is executed after the try/catch block has completed, regardless of whether an error occurred or not.
      // It logs a message to the console indicating that the promise has completed.
      console.log("PROMISE DONE")
   }
}

secondMethod()