// QUESTION-3

const ageInDays = function (person) {
  const fullName = `${person.fName} ${person.lName}`;

  const ageInDays = person.age * 365;

  return function () {
    console.log(`The person's full 
    name is ${fullName} and their age in days is ${ageInDays}.`);
  };
};

const person = {
  fName: "max",
  lName: "smith",
  age: 1,
};
const logResult = ageInDays(person);
logResult();
