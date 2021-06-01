// parametros query
// se separan utilizando signo de ?
// se redactan con el nombre del parametro igual al valor del parametro
// ?userId=1
//let userId = 1;
let parametros = {
  userId: 1,
  _limit: 5
} 

let url = new URL('https://jsonplaceholder.typicode.com/posts')

console.log(Object.keys(parametros).forEach( paramKey => {
  url.searchParams.append(
    paramKey,
    parametros[paramKey]
  )
}))

console.log(url)

fetch(url).then(r => r.json().then(data => console.log(data)))
