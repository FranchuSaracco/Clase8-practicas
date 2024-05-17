// 1. Creá un objeto literal misDatos con tu información en sus propiedades: nombre, apellido, dni, comidasFavoritas (al menos 3. ¿Qué tipo de dato tenés que usar en esta propiedad?)

let misDatos = {
    nombre: "Francesca",
    apellido: "Saracco",
    dni: "12345678",
    comidasFavoritas: ["Milanesa", "Fideos", "Sushi"]
}

console.log("Nombre: " + misDatos.nombre);
console.log("Apellido: " + misDatos.apellido);
console.log("DNI: " + misDatos.dni);
console.log("Comidas Favoritas: " + misDatos.comidasFavoritas) 


// 2. Implementar el método saludar() en el objeto misDatos que al ser invocado retorne un string así: "Hola mi nombre es NOMBRE APELLIDO y tengo EDAD años. Mi primer comida favorita es LAPRIMERADELARRAY". Imprimí la frase en la consola.

let misDatos2 = {
    nombre: "Francesca",
    apellido: "Saracco",
    dni: "12345678",
    edad: "18",
    comidasFavoritas: ["Milanesa", "Fideos", "Sushi"],

    saludar: function() {
        return `Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años. Mi primer comida favorita es ${this.comidasFavoritas[0]}.`;
    }
}

console.log(misDatos2.saludar());


// 3. Vamos a crear un auto como objeto literal con las propiedades: marca, modelo, año, color, posicion: contendrá como valor inicial 0.  Los métodos avanzar(n) y retroceder(n) que modifiquen la posición del auto. avanzar(n) recibe un número positivo y aumenta el valor de la propiedad “posicion”. retroceder(n) recibe un número positivo y disminuye el valor de la propiedad “posicion”. Probá mover el auto usando varias veces los métodos avanzar(n) y retroceder(n). Recordá usar una sola vez console.log() para ver la posición final del auto. ¿Qué deberías indicar dentro de los paréntesis de console.log() para ver la posición final del auto?

let auto = {
    marca: "Jeep",
    modelo: "Compass",
    anio: 2021,
    color: "Azul",
    posicion: 0,
    avanzar: function(n) {
        this.posicion += n;
    },
    retroceder: function(n) {
        this.posicion -= n;
    }
};

auto.retroceder(3);
auto.avanzar(15);

console.log("La posición final del auto es: " + auto.posicion);


// 4. Creá una nueva variable “nuevoAuto” con las mismas propiedades que la anterior y reemplazá los métodos avanzar(n) y retroceder(n) por un único método moverse(n) ¿Cómo lo escribirías? Probá mover el auto usando el método moverse(n). Finalmente mostrá por consola cuál es la posición final del auto.


let nuevoAuto = {
    marca: "Jeep",
    modelo: "Compass",
    anio: 2021,
    color: "Azul",
    posicion: 0,
    moverse: function(n) {
        this.posicion += n;
    }
};

nuevoAuto.moverse(-3);
nuevoAuto.moverse(17);

console.log("La posición final del auto nuevo es: " + nuevoAuto.posicion);


// 5. 

let ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(eleccion) {
        this.energia -= 10;
        return `Poder Elegido de ${this.nombre}: ${this.poderes[eleccion]}. Energía restante: ${this.energia}.`;
    }
};


let hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(eleccion) {
        this.energia -= 10;
        return `Poder Elegido de ${this.nombre}: ${this.poderes[eleccion]}. Energía restante: ${this.energia}.`;
    }
};


console.log(ironMan.getPoder(0)); 
console.log(hulk.getPoder(0));    
console.log(ironMan.getPoder(0)); 
console.log(hulk.getPoder(0));   
console.log(ironMan.getPoder(0)); 
console.log(hulk.getPoder(0));    
console.log(ironMan.getPoder(0)); 
console.log(hulk.getPoder(0));    
console.log(ironMan.getPoder(0)); 
console.log(hulk.getPoder(0)); 

console.log("La energía final de Iron Man es: " + ironMan.energia);
console.log("La energía final de Hulk es: " + hulk.energia);