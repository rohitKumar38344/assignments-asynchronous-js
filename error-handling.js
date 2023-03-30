// QUESTION-9

const fetchData = function () {
  fetch("https://jsonplaceholder.typicoe.com/posts/123456789")
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((error) => {
      console.log("Error occurred: ", error);
    });
};

fetchData();
