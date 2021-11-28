
//Caracteristicas del ECMA Scrpit 6

//Parametros por defecto

//Antes del es6
function newFuntion(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}
//es6

function miFuncion (nombre='oscar', age=33, country='MX'){
    console.log(nombre, age, country);
}

newFuntion();
miFuncion();

//Concatenacion 

//Antes del es6

let hello = 'hello';
let world = 'world';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//ES6

console.log(`${hello} ${world}`);


//String multi linea

let lorem = 'Esta es una frase que necesits\n'+'Dos lineas con concatenacion';
let lorem2 = `Una frase epica que se hace
sin la necesidad de concatenar 
`;

console.log(lorem);
console.log(lorem2);