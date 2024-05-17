// 1. a. Imprimí por consola 5 veces la frase: “Practicando con el bucle for”.

for (let i=0; i<5; i++) {
    console.log(`Practicando con el bucle for`);
}

// b. Utilizando el valor de la variable " i " Imprimí 10 veces por consola la frase: “La variable i tiene el valor valorDei”. Usá la sintáxis template líterals.

for (let i=0; i<10; i++) {
    console.log(`La variable i tiene el valor ${i}`);
}


// c. Imprimí por consola: 10 múltiplos de 2 ¿Qué parte del bucle for modificarías para que i varíe de 2 en 2.   50 múltiplos de 5 ¿Qué parte del bucle for modificarías para que i varíe de 5 en 5.

for (let i=0; i<20; i+=2) {
    console.log(i);
}

for (let i=0; i<250; i+=5) {
    console.log(i);
}

// d. Creá un bucle for que imprima por consola los números desde el 100 al 0. 

for (let i = 100; i >= 0; i--) {
    console.log(i);
}

// 2. a. Utilizando un bucle for deberás generar un array con los resultados. Creá la variable base que contendrá un número. Definí también una variable resultados que sea un array vacío.

let base = 7; 
let resultados = [];


for (let i = 1; i <= 10; i++) {
    resultados.push(base * i);
}

console.log(resultados);


// b. Crea un for que recorra desde el 1 al 10.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// c. En cada iteración deberás multiplicar el número base por cada valor de la iteración y guardar el resultado dentro del array. Para ello necesitarás usar uno de los métodos de arrays que te permite agregar elementos. El array resultados debe contener la tabla de multiplicar del número base. Por ejemplo, si base es 2, resultados debe ser [2,4,6,8,10,12,14,16,18,20]

let base2 = 2; 
let resultados2 = []; 

for (let i = 1; i <= 10; i++) {
    resultados2.push(base2 * i); 
}

console.log(resultados2);


// 3. a. Crea la variable ganancias que contenga un array. Dentro del array coloca 10 números que pueden ser positivos o negativos. Utilizando un bucle for deberás obtener el valor de la suma de todos los números del array. Tal vez necesites crear una variable adicional que te permita guardar la suma.


let ganancias = [50, -20, 30, -40, 60, -10, 70, -80, 90, -100];
let suma = 0;

for (let i = 0; i<ganancias.length; i++) {
    suma += ganancias[i];
}

console.log("La suma de las ganancias es:", suma)


// 4. Imprimí por consola la lista de temas incluídos dentro del siguiente array. Tené en cuenta usar el método .length para hacer que nuestro código se mantenga vigente aún en caso de sacar o agregar elementos al array. Imprimí el mismo array anterior pero ahora modificá el código para que indique también el número de orden del track. Deberías obtener:

let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
];

for (let i = 0; i<healingIsDifficult.length; i++) {
    console.log(`${i + 1} ${healingIsDifficult[i]}`);
}

// 5. 

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];

for (let i = 0; i<got.length; i++) {
    let persona = got[i];
    let ciudad = persona.ciudad ? persona.ciudad : "desconocida";
    
    console.log(`Hola ${persona.nombre} ${persona.apellido} criatura viajera!`);
    console.log(`Soy ${persona.nombre} ${persona.apellido} de la ciudad ${ciudad}`);
}