// variable decleration
/**
 * we have three keywords to create a variable
 * - const :- for the constant value that we won't change. if you try change, it'll give you an error
 * - let :- for the blockcope, which means it just accessable in a block. {thi is block}. nd we can change it as well
 * - var :- this is global scope variable, it accessable in whole file.
 */

// SYNTAX :-  keyword variableName = value;
const constVaribae = "this is a constant value";
let letVariable = "this is let value";
var varVariable = "this is global variable";

{
   // constVaribae = "another const value"; // Error - Assignment to constant variable
   console.log(constVaribae); // OUTPUT - this is a constant value
   const blockConstVariable = "some value"; // this variable only accessable in this block
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
   var blockVarVariabe = "this is block 'var' wala variable";
   console.log(blockVarVariabe); // accessing the "var" variable in the same block
}

console.log(blockVarVariabe); // see this is accessable outside the block as well
