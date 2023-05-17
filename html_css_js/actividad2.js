function agregarDatos() {
    const dato = prompt("Ingrese sus peticiones, reclamos, quejas y sugerencias");

    if(dato){
        const datosDiv = document.getElementById("datos");

        const nuevoDato = document.createElement("p");
        nuevoDato.textContent = dato;

        datosDiv.appendChild(nuevoDato);
    }
}