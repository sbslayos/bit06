'use strict'
// Pedir Nombre Y Edad Al Usuario. Si Se Llama Pepita Y Es Mayor De Edad Permitir Ingreso A La Sala De Espera #1.
// Si Se Llama Pepita Y Es Menor De Edad Permitir Ingreso A La Sala #2
// Si No Es Pepita Pero Es Mayor De Edad Ingreso A La Sala #3
// Si No Se Llama Pepita Y No Es Mayor De Edad Dirigir A La Sala #4



form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    let title = document.getElementById('result');

    if (name === "pepita" && age > 18) {
        alert("sala 1");
        title.innerHTML = `Ingresa a la sala #1`;
    } else if (name === "pepita" && age < 18) {
        alert("sala 2");
        title.innerHTML = `Ingresa a la sala #2`;
    } else if ( name !== "pepita" && age >= 18){
        alert("Ingreso sala 3")
        title.innerHTML = `Ingresa a la sala #3`;
    } else {
        alert("sala 4")
        title.innerHTML = `Ingresa a la sala #4`;
    }
})