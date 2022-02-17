localStorage.setItem('validation', true)
localStorage.setItem('bienvenida', 'Saludos a todos')
localStorage.setItem('unNumero', 22)

let numero = localStorage.getItem('unNumero')
let validation = localStorage.getItem('validation')

console.log("El número es: ", numero)
console.log(validation, "=>", typeof validation)

