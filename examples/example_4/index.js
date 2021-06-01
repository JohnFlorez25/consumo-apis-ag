let postParams = {
  title: 'foo',
  body: 'bar',
  userId: 1
}

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(postParams),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
}).then(r => r.json().then(data => console.log(data)))