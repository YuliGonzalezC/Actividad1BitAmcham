/* Escribe una función en JavaScript llamada "calcularPrecio" que recibe dos parámetros: "precioBase" y "descuento".
La función debe calcular el precio final de un producto aplicando el descuento sobre el precio base.
La función debe cumplir los siguientes requisitos:

Si el precio base es menor o igual a 0 o el descuento es menor a 0 o mayor a 100, 
la función debe retornar el mensaje "Los valores ingresados son inválidos".
Si el descuento es igual a 0, la función debe retornar el precio base sin descuento.
Si el descuento es mayor a 0 y menor o igual a 100, la función debe calcular el precio final con descuento 
y retornarlo con el siguiente mensaje: "El precio final con descuento es $ */



function calcularPrecio (precioBase, descuento){

    let precioFinal;

if(precioBase <=0 || descuento <0 || descuento > 100){
    return "Los valores ingresados son inválidos"
}
else if(descuento == 0 ){
    return precioBase;
}  else {     
    (descuento > 0 && descuento > 100)      

    precioFinal = precioBase - (precioBase * (descuento/100) );

    return `el precio final con descuento es ${precioFinal}` ;
    }

}



console.log(calcularPrecio(200,20))

