obj = {id: 1, name: 'Facundo'}

localStorage.setItem('data', obj)

let data = localStorage.getItem('data')
console.log(data)
console.log(typeof data)

// Guardar con STRINGFY
const product1 = {id: 2, name: 'cadena'}
console.log(product1)
const esJSON = JSON.stringify(product1)
console.log(esJSON)

localStorage.setItem("product", esJSON)

console.log('-----------------------------------------')

//Get JSON
const fromCache = localStorage.getItem('product')
console.log(fromCache)
const product11 = JSON.parse(fromCache)
console.log(product11)
console.log(product11.id, product11.name)

//Ejemplo
const productss = [
    {id: 1, name: "Collar rojo", price: 1200 },
    {id: 2, name: "Collar Azul", price: 1300 },
    {id: 3, name: "Collar Verde", price: 1600 },
    {id: 4, name: "Collar Violeta", price: 1900 }
]

const guardarLocal = function(key, value){
    localStorage.setItem(key, value)
}

for(const product of productss){
    guardarLocal(product.id, JSON.stringify(product))
}
