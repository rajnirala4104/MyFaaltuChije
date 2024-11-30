// Initialize a with the value 5
let a = 5;
// Assign the value of a to b, then increment a
let b = a++;
// a becomes 6 due to post-increment, b remains 5 as it was assigned before increment
console.log(a, b); // 6 5

// Initialize x with the value 5
let x = 5;
// Increment x, then assign the new value to z
let z = ++x;
// x becomes 6 due to pre-increment, z is also 6 as it was assigned after increment
console.log(x, z); // 6 6

// Initialize p with the value 5
let p = 5;
// Assign the value of p to q, then decrement p
let q = p--;
// p becomes 4 due to post-decrement, q remains 5 as it was assigned before decrement
console.log(p, q); // 4 5

// Initialize r with the value 5
let r = 5;
// Decrement r, then assign the new value to s
let s = --r;
// r becomes 4 due to pre-decrement, s is also 4 as it was assigned after decrement
console.log(r, s); // 4 4

