let result = fetch('https://jsonplaceholder.typicode.com/posts')

result.then((response) => {
    return response.json()
    }).then((json2) => {
        return json2
    })

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((j) => console.log(j))

