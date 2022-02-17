sessionStorage.setItem('seleccionados', [1, 2, 3])
sessionStorage.setItem('validation', false)
sessionStorage.setItem('email', 'foo@goo.com')

let lista = sessionStorage.getItem('seleccionados').split(',')
let email = sessionStorage.getItem('email')

console.log(lista)
console.log(email)


// Recorrer todos los Storages
function showStorage() {
    for(let i = 0; i < sessionStorage.length; i++) {
        let key = sessionStorage.key(i);
        let value = sessionStorage.getItem(key)
        
        console.log("Key:" , key, "->", value)
    }
}

//Eliminar un key (email)
//sessionStorage.removeItem('email')

// Borrar todo
//sessionStorage.clear()

showStorage()

//Ejemplo pidiendo Username
let usarname = localStorage.getItem('username')

if(usarname){
    alert("Bienvenido " + usarname)
}else{
    usarname = prompt("Insert usarname: ")
    localStorage.setItem('username', usarname)
}

console.log(usarname)


