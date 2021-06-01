console.log(
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    //Unit8Array
    console.log(
      response.json().then(function (data) {
        console.log(data);
      })
    );
  })
);

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(
      function(response){ return response.json()}
  ). then(
      function(data){
          console.log(data)
      }
  )

  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(
      response => response.json()
  ). then(
      data => console.log(data)
  )