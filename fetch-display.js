// QUESTION-8

const fetchData = function () {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((error) => {
      console.log("Error occurred: ", error);
    });
};

fetchData();
