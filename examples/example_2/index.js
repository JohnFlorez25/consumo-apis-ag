//Manejo del resuldado y errores
//catch errores
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if(response.status >= 200 && response < 300)
    console.log(response)
    response.json()
  })
  .then((data) => console.log(data))
  .catch(
    err => console.log(err)
  );
