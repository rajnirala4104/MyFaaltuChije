console.log("---------- .at() ---------")
console.log("---------- number[] -----------")
const numbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 110];
// array.at(index);
console.log(numbers.at()) // index = 0
console.log(numbers.at(0)); // 11
console.log(numbers.at(1)); // 12
// -1 means start from last item
console.log(numbers.at(-1)) // 110  
console.log(numbers.at(-2)) // 19 

console.log('----------- string[] ----------------')
const instruments = ["guitar", "piano", "flute", "banjo", "santoor", "ukelele", "saxophone"];
console.log(instruments.at(3)) // banjo
console.log(instruments.at(-1)) // saxophone


console.log("------- array of Objects ------")
const users = [
   {
      name: "Raj",
      age: 20,
      work: "Musician, Singer and writer",
      hobbies: ["Music", "Coding", "Travelling", "Reading", "Sleeping"],
   },
   {
      name: "Achich",
      age: 21,
      work: "cricket",
      hobbies: ["cricket", "Travelling", "Game"],
   },
   {
      name: "Diksha",
      age: 21,
      work: "Artist and Philosopher",
      hobbies: ["Painting", "Travelling"]
   }
]

console.log(users.at().work)  // Musician, Singer and writer
console.log(users.at(-1).hobbies.at(0))  // Painting
console.log(users.at(-2).name) // Achich
console.log(users.at(1).name) // Achich


// ----------- array.concat() ---------- 
console.log("------------ .concat() ------------")

// SYNTEX - array1.concat(array2, array3, ..., arrayX)

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arrOfObject = [{ name: "Raj" }, { name: "Achich" }, { name: "Diksha" }, { name: "Vinit" }, { name: "Neha" }]

const concatArr = arr1.concat(arr2, arrOfObject);
console.log(concatArr);

// ----------- array.entries() ---------- 
console.log("------------ .entries() ------------")

/**
  The entries() method returns an Iterator object with the key/value pairs from an array:
  [1, "Orange"]
  [2, "Apple"]
  [3, "Mango"]
  [0, "Banana"]
   The entries() method does not change the original array.
 */

const list = instruments.entries();
let text = [];
for (let x of list) {
   text.push(x);
}
console.log(text);


// ----------- array.every(callBack()) ---------- 
console.log("------------ .every(callBack()) ------------")
/*
The every() method executes a function for each array element.

The every() method returns true if the function returns true for all elements.

The every() method returns false if the function returns false for one element.

The every() method does not execute the function for empty elements.

The every() method does not change the original array
*/

const ages = [19, 43, 54, 65, 14, 55];
const newAeges = ages.every((age) => {
   // this function will return Boolen

   // true if the function returns true for all elements.
   // false if the function returns false for one element.
   return age > 18
})

console.log(newAeges);

// ----------- array.fill() ---------- 
console.log("------------ .fill() ------------")
// SYNTAX - array.fill(value, start, end)
/*
value - Required. The value to fill in.
start	- Optional. The start index (position). Default is 0.
end - Optional. The stop index (position). Default is array length.
*/

const something = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(something)
something.fill(0); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
console.log(something);
something.fill("wow", 2, 6); // [1, 2, "wow", "wow", "wow", "wow", 7, 8, 9, 10]
console.log(something);

// ----------- array.shift() ---------- 
console.log("------------ .shift() ------------")
const arr = [23, 5, 6, 3, 6, 8, 867, 54, 3];
console.log(arr.shift()) // .shift() remove the first element from an array and it returns the removed element
console.log(arr) // .shift() changes the original array


// ----------- array.with() ----------
// SYNTAX -> array.with(index, value)

/*
The with() method updates a specified array element.

The with() method returns a new array.

The with() method does not change the original array.

*/

console.log("------------ .with() ------------")

const withArr = [
   {
      name: "raj nirala",
      age: 20,
      work: "software developer"
   }, {
      name: "diksha",
      age: 21,
      work: "artist",
   }, {
      name: "ashish",
      age: 22,
      work: "cricket"
   }
];
console.log(withArr)
const updatedWithArr = withArr.with(1, { ...withArr[1], work: "philosopher" })
console.log(updatedWithArr)



// // ----------- array.reduce() ----------
// SYNTAX -> array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
console.log("------------ .reduce() ------------")

const reduceArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// We are using the reduce() method on the reduceArr array.
// The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
// The reduce() method takes in two arguments: a callback function and an initial value.
// The callback function takes in four arguments: the accumulator, the current value, the current index, and the array itself.
// The accumulator is the value that we are building up over each iteration of the reduce() method. It starts with the initial value of 0.
// The current value is the current element in the array that we are iterating over.
// The current index is the index of the current element in the array.
// The array itself is the original array that we are iterating over.

// In the callback function, we are adding the current value to the accumulator.
// We are then returning the updated accumulator.

// The reduce() method will iterate over each element in the array and build up a single value.
// The final value of the reduce() method is the accumulated value.

const updatedArr = reduceArr.reduce((acc, value, index, arr) => {
   // Add the current value to the accumulator
   acc = acc + value
   // Return the updated accumulator
   return acc
}, 0) // Start with an initial value of 0


console.log(updatedArr)


