// 1. Crear una función rectangulo que reciba como parámetros la altura y el ancho de un rectángulo y retorne el área.

let alturaRectangulo = 5;
let anchoRectangulo = 10;

function rectangulo(alturaRectangulo, anchoRectangulo) {
    let areaRectangulo = alturaRectangulo * anchoRectangulo;
    return areaRectangulo;
}

let areaRectangulo = rectangulo(alturaRectangulo, anchoRectangulo);
console.log("El área del rectángulo es: " + areaRectangulo);



// 2. Crear una función triangulo que reciba como parámetro la base y la altura de un triángulo y retorne el área.

let alturaTriangulo = 5;
let baseTriangulo = 10;

function triangulo(alturaTriangulo, baseTriangulo) {
    let areaTriangulo = (alturaTriangulo * baseTriangulo)/2;
    return areaTriangulo;
}

let areaTriangulo = triangulo(alturaTriangulo, baseTriangulo);
console.log("El área del triángulo es: " + areaTriangulo);



// 3. Crea una función largoDelArray que reciba como parámetro un array y retorne la cantidad de elementos que contiene.

function largoDelArray (array){
    return array.length;
}

let miArray = [1, 2, 3, 4, 5];
let cantidadElementos = largoDelArray(miArray);
console.log("La cantidad de elementos en el array es: " + cantidadElementos);



// 4. Crea una función cantidadDeLetras que reciba como parámetro una palabra y devuelva la cantidad de letras que tiene.

function cantidadDeLetras (palabra){
    return palabra.length
}

let palabra = "JavaScript";
let cantidadLetras = cantidadDeLetras(palabra);
console.log("La cantidad de letras en la palabra es: " + cantidadLetras);


// 5. Crea una función dolarHoy que reciba como parámetro un precio en pesos argentinos y devuelva el precio en dólares estadounidenses.


function dolarHoy (precioEnPesos){
    const tasaCambio = 0.012;
    return precioEnPesos * tasaCambio;
}

let precioEnPesos = 1000;
let precioEnDolares = dolarHoy(precioEnPesos);
console.log("El precio en dólares es: $" + precioEnDolares.toFixed(2));



// 6. Crea una función precioFinal que reciba un precio como parámetro y retorne el precio más el IVA (21%).

function precioFinal (precio){
    const iva = 0.21;
    return precio * (1+iva);
}

let precioInicial = 100;
let precioConIVA = precioFinal(precioInicial);
console.log("El precio final con IVA es: $" + precioConIVA.toFixed(2));




// 7. Crea una función mitad que reciba un número como parámetro y devuelva su mitad. Tené en cuenta que el operador de división en JavaScript es “ / ”.

function mitad(numero){
    return numero /2;
}

let numero = 100;
let mitadNumero = mitad(numero);
console.log("La mitad del numero es: " + mitadNumero);



// 8. Desafío extra: Crea una función diaSegunNumero que reciba como parámetros un array y un número y retorne el día correspondiente al número ingresado.

function diaSegunNumero (array, numero){
    if (numero < 0 || numero > 6) {
        return "Número de día inválido";
    }
    return array[numero]; 
}

let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
let numeroDia = 3;
let diaCorrespondiente = diaSegunNumero(diasSemana, numeroDia);
console.log("El día correspondiente al número " + numeroDia + " es: " + diaCorrespondiente);
