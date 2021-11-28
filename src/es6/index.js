
//Caracteristicas del ECMA Scrpit 6

//Parametros por defecto

//Antes del es6
function newFuntion(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

//ES6 con parametros por defecto ahorrando lineas de codigo

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

//Antes del ES6
let lorem = 'Esta es una frase que necesits\n'+'Dos lineas con concatenacion';


//ES6
let lorem2 = `Una frase epica que se hace
sin la necesidad de concatenar 
`;

console.log(lorem);
console.log(lorem2);



//Variables de scope 

//Antes del ES6

var miVariableGlobal = 19102;


//ES6
const miConstante = 1002;
let miVariable = 1920;


//Spread operator 

//Permite ectraer el contenido de un array para crear otro
//Creando una copia exacta del contenido del mismo

const array1 = [1,2,3];
const array2 = [4,5,6];

const array3 = [...array1,...array2];

//Desestructuracion

//La desestructuracion consiste en extraer datos de un objeto o de un
//Array y almacenarlos en variables para acceder mas facilmente a ellos

const Persona = {
    nombre: 'Luis',
    edad: 19
}

//Al desestructurar objetos lo haremos por el nombre de la propiedad que requiramos usar 
//Ademas de ello esto es muy util en los props de React en funtional Components
const {nombre, edad} = Persona;

console.log(nombre, edad);
//Desestructuracion de array es un poco diferente pues esta es por medio de la posicion y no del nombre

const array = ['nombre', 'edad'];

const [Nombre, Edad] = array;
console.log(Nombre, Edad);