// this is how you can create a method in any javaScript object
String.prototype.trueValue = function () {
   let finalarValue = "";
   this.split(" ").forEach((singleValue) => {
      if (singleValue.length > 0) {
         finalarValue += singleValue + " ";
      }
   });
   return finalarValue.trim();
};

String.prototype.trueLength = function () {
   return this.trueValue().length;
};

// this is how you can create a constant in any javaScript object
String.prototype.defaulValue = "this is default value";

const someString = "raj    nirala        ";
const anotherString =
   "this is what    i wanted to    explain    but i haven't fished    yer...   ";
// console.log(someString.trueLength());
// console.log(anotherString.trueValue());

Object.prototype.defaulVariable = "this is default variable";

// ---------------------------------------------------------------------------
