// QUESTION-7

async function sendMultipleReq() {
  try {
    const data1 = await fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(function dataFromReq1(response1) {
        return response1.json();
      })
      .then(function dataFromReq1(response1) {
        return response1;
      });

    const data2 = await fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(function dataFromReq2(response2) {
        return response2.json();
      })
      .then(function dataFromReq2(response2) {
        return response2;
      });

    const obj = {};
    obj.todo = data1;
    obj.post = data2;

    console.log(obj);
  } catch (error) {
    console.log("error occured: ", error);
  }
}

sendMultipleReq();
