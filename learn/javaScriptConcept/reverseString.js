
const reverseStringFunction = (str) => {
  let finalText = [];
  for (let i = (str.length - 1); i >= 0; i--) {
    finalText.push(str[i]);
  }
  return finalText.reduce((arr, value) => arr + value);
};

console.log(reverseStringFunction("raj"));