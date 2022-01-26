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
    let ingresarNumero = parseInt(prompt("Ingrese cualquier número"));
    
    for (let i = 0; i <= 5; i++){
        let resultado = ingresarNumero * (i+1);
        console.log(ingresarNumero + " * (" + i + "+1)" + " = " + resultado);
    }
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

class Producto { 
    
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
        this.vendido = false
    }

    sumarIva() {
        this.precio = this.precio * 1.21;
    }

    vender() {
        this.vendido = true
    }

}

const productoA = new Producto("Anillo", 1500)
const productoB = new Producto("Collar", 2200)

productoA.sumarIva()
productoB.sumarIva()

productoA.vender()

console.log(productoA)
console.log(productoB)

