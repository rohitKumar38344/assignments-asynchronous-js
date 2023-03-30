// QUESTION-5

function makePromise(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(printName(name));
    }, 2000);
  });
}

function printName(name) {
  console.log(`Hello, ${name}`);
}

makePromise("max");
