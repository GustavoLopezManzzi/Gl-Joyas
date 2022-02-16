/*Cuadro de pregunta*/
// prompt("Ingrese Nombre")
let nombre = prompt("Ingrese Nombre")

console.log("Su nombre es", nombre)

//Cuadro de Alerta
alert("Hola" + " " + nombre + " " + "Bienvenido!")


let edad = prompt("Ingrese su edad")
console.log(nombre, ", ingrese su edad")

if (edad >= 18){
    alert("Tu tienes " + edad + " años," + " Puedes ingresar!");
    console.log("Tu tienes " + edad + " años," + " Puedes ingresar!")
    /*let ingresarNumero = parseInt(prompt("Ingrese cualquier número"));
    
    for (let i = 0; i <= 5; i++){
        let resultado = ingresarNumero * (i+1);
        console.log(ingresarNumero + " * (" + i + "+1)" + " = " + resultado);
    }*/
} 
else{
    alert("Lo siento, tu tienes " + edad + " años, no puedes ingresar.");
    console.log("Lo siento, tu tienes " + edad + " años, no puedes ingresar.")
}

/*Si tiene >= de 18 años me deja ingresar y hacer cuenta, de lo contrario no me deja ingresar y finaliza el algoritmo*/


const suma = (a, b) => a + b
const resta = (a, b) => a - b
const iva = (x) => x * 0.21

let precioProducto = 400
let descuento = 40

let precioDescuento = resta(precioProducto, descuento)
let precioFinal = suma(precioDescuento, iva(precioDescuento))

console.log("El precio final es " + precioFinal)

//Arrays con productos

/*class Producto {
    constructor (id, nombre, precio) {
        this.id = parseFloat(id);
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false
    }

    sumarIva(){
        this.precio = this.precio * 1.21
    }

}

const productos = []

productos.push(new Producto (1, "Anillo Azul", 1300))
productos.push(new Producto (2, "Anillo Verde", 1500))
productos.push(new Producto (3, "Collar con Dije", 2000))

for(const producto of productos){
    producto.sumarIva()
}

const buscar = productos.find(Producto => Producto.id == 2)
console.log(buscar)

const existe = productos.some(Producto => Producto.nombre = "Anillo Azul")
console.log("Existe un Anillo Azul existe? ", existe)

const barato = productos.filter(Producto => Producto.precio <= 1900)
console.log("Los articulos baratos son ", barato)

const listNombres = productos.map(Producto => Producto.nombre)
console.log(listNombres)*/


//COMENZANDO CON DOM
const products = [
    {id: 1, name: "Collar rojo", price: 1200 },
    {id: 2, name: "Collar Azul", price: 1300 },
    {id: 3, name: "Collar Verde", price: 1600 },
    {id: 4, name: "Collar Violeta", price: 1900 }
]

const padre = document.getElementById("productos")

for(const producto of products) {
    let contenedor = document.createElement("div")

    contenedor.innerHTML = `
        <h3> ID: ${producto.id} </h3>
        <p> Producto: ${producto.name} </p>
        <b> $ ${producto.price}</b>
        <hr>
    `

    padre.appendChild(contenedor)

}

//Comenzando con Eventos

const cart = []

const productos = [
    {id: 1, name: "Pulsera con Dije", price: 1200 },
    {id: 2, name: "Anillo Amatista", price: 3500 },
    {id: 3, name: "Collar Sensación", price: 2700 },
]

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")

function addCart(id) {
    const producto = productos.find(p => p.id == id)
    console.log("Add ", producto)
    cart.push(producto)
}

btn1.onclick = () => addCart(1)
btn2.onclick = () => addCart(2)
btn3.onclick = () => addCart(3)

document.getElementById("btnShow").addEventListener("click", () => {
    console.log(cart)
})

document.getElementById("btnShowTotal").onclick = () => {
    let total = 0
    for(const prodCart of cart) {
        total += prodCart.price
    }

    alert(`El precio total es $ ${total}`)
}

