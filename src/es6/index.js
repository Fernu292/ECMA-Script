
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

//Objetos mejorados

let name = 'oscar';
let age = 32;

//Antes del ES6 con redundancia de propiedades
obj = { name: name, age: age};

//Con ES6 ahorrando codigo y haciendo facil crear objetos grandes
obj2 = {name, age};

console.log(obj2);


//Array functions 
//Presentan una solucin practica para ahorrar codigo dentro de una funcion

const names = [
    {name: 'oscar', age: 32},
    {name: 'Luis', age:18},
];

//Funciones comunes antes del ES6 anonimas
let listOfNames = names.map(function(item){
    console.log(item.name);
})

//Usos de las arrow functions con el ES6 siendo mas amigable con
//Su sintaxis
let listOfNames2 = names.map( item => console.log(item.name));

//Declaracion de un arroy function 
const listOfNames3 = (name, age, country)=>{
    return name, age, country;
}

//Permite evitar los parentesis al usar un solo parametro
const names2 = name =>{
    return name;
}   

//Funcion con return implicito, hay dos formas de hacerlo, con un ()parentesis 
//O bien sin poner las llaves

const returnImplicito = (name) => name;

const returnImplicito2 = (name)=>(name);



//Promesas en JS ES6 

//Antes del ES6 teniamos el problema del callback hell donde se anidaban 
//Multiples callbacks para poder resolver una tarea asincrona 

//En el ES6 podemos hacelo mucho mas facil y eficiente con promesas 

const miPromesa = ()=>{
    return new Promise( (resolve, reject)=>{
        if(true){
            resolve('Hey! todo ha salido bien');
        }
        else{
            reject('Ocurrio un error');
        }
    })
}

//Ejecucion y manejo de promesas
miPromesa()
    .then(Response => console.log(Response))
    .catch(err => console.log(err));


//Clases, permiten la creacion de objetos en base a una plantilla
//tienen metodos y propiedades bien definidas
//Fueron agregadad en el ES6

class calculator {

    constructor(){//Constructor para inicializar una clase 
        this.valueA = 0;
        this.valueB = 0;
    }

    //Metodo de suma en la clase 
    sum(valeA, valueB){
        this.valueA = valeA;//Asignacion de variables a los datos recibidos
        this.valueB = valueB;

        return this.valueA+this.valueB;
    }
}

const calc = new calculator;
console.log(calc.sum(4,3));


//Tranajo de modulos

//importacion de un modulo

import {hello} from "./modulo";

console.log(hello());