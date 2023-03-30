// QUESTION-6

const fetchData = async function () {
  await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((error) => {
      console.log("Error occurred: ", error);
    });
};

fetchData();
