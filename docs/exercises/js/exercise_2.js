'use strict'
// Pedir edad al usuario y responder si es o no es mayor de edad.


let form = document.getElementById('form');
let title = document.getElementById('title'); 

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const age = Number(form.edad.value)

    if ( age >= 18) {
        title.innerHTML = 'Si es mayor de edad';
    } else {
        title.innerHTML = 'No es mayor de edad';
    }
})

// function pruebaConsole(){
//     console.log("Hola Mundo");

// }

// function mayordeEdad(18){
//     const edad= Number(prompt('Introduce tu edad:',''));
//     if (edad >= 18)  alert('Si es mayor de edad');
//         else
//         alert('No es mayor de edad')
// }
// console.log(mayordeEdad())

