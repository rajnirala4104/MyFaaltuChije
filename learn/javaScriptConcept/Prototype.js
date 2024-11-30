// this is how you can create a method in any javaScript object
String.prototype.trueValue = function () {
   let finalValue = "";
   this.split(" ").forEach((singleValue) => {
      if (singleValue.length > 0) {
         finalValue += singleValue + " ";
      }
   });
   return finalValue.trim();
};

String.prototype.trueLength = function () {
   return this.trueValue().length;
};

// this is how you can create a constant in any javaScript object
String.prototype.defaultValue = "this is default value";

const someString = "raj    nirala        ";
const anotherString =
   "this is what    i wanted to    explain    but i haven't fished    yer...   ";
// console.log(someString.trueLength());
// console.log(anotherString.trueValue());

Object.prototype.defaultVariable = "this is default variable";

// ---------------------------------------------------------------------------
