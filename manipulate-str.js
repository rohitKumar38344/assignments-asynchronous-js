// QUESTION-2

const strCharUpperCase = function (str) {
  const charArr = [...str];
  const modifiedStr = charArr.map((v) => v.toUpperCase()).join("");
  return function logString() {
    console.log(`The manipulated string is: ${modifiedStr}`);
  };
};

const logString = strCharUpperCase("hello, world");
logString();
