// variable declaration
/**
 * we have three keywords to create a variable
 * - const :- for the constant value that we won't change. if you try change, it'll give you an error
 * - let :- for the blockscope, which means it just accessible in a block. {thi is block}. nd we can change it as well
 * - var :- this is global scope variable, it accessible in whole file.
 */

// SYNTAX :-  keyword variableName = value;
const constVariable = "this is a constant value";
let letVariable = "this is let value";
var varVariable = "this is global variable";

{
   // constVariable = "another const value"; // Error - Assignment to constant variable
   console.log(constVariable); // OUTPUT - this is a constant value
   const blockConstVariable = "some value"; // this variable only accessible in this block
   console.log(blockConstVariable);
}

// console.log(blockConstVariable); // Error - blockConstVariable is not defined

{
   // const and let are lilbit similar, just we can't change the "const" value but we can change "let" value
   letVariable = "another let value";
   console.log(letVariable);
}

{
   // "var" is too different than "const" and "let"
   // we can access this everywhere in this file
   // we can change it as well
   var blockVarVariable = "this is block 'var' wala variable";
   console.log(blockVarVariable); // accessing the "var" variable in the same block
}

console.log(blockVarVariable); // see this is accessible outside the block as well
