// QUESTION 1

const operatreArray = function (arr, callback) {
  return callback(arr);
};

function doubleEachValueOfArray(arr) {
  return arr.map((val) => val * 2);
}

const arr = operatreArray([8, 5, 6, 7], doubleEachValueOfArray);

console.log(arr);
