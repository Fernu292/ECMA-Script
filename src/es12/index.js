//ReplaceAll 

const string = 'JavaScript es maravilloso, con JavaScript puedo construir el futuro de la web';

//El metodo replace remplaza solamente la primera coincidencia con la condicion

const replaceString = string.replace("JavaScript", "Python");
console.log(replaceString);

//ReplaceAll permite remplazar todas las coincidencias

const replaceString2 = string.replaceAll("JavaScrpit", "Pyhton")
console.log(replaceString2);

//Alternativa a replaceAll con expresiones regulares
const replaceString3 = string.replace(/JavaScript/g, "Python");
console.log(replaceString3);


//Metodos privados de clases en Js con # para manejarlos unicamente en la funcion 

class myClase {
    show(val){
        console.log(val);
    };

    // get #show(val){
    //     //Nuestro codigo
    // }
}

const message = new myClase();
message.show('Hola!');

//Promise any, que es un objeto global de un array de promesas 
//Tomando el primer valor satisfactorio de una promesa 

const promise1 = new Promise( (resolve, reject)=> reject('reject'));
const promise2 = new Promise( (resolve, reject)=> resolve('resolve'));
const promise3 = new Promise( (resolve, reject)=> resolve('resolve2'));

Promise.any([promise1, promise2, promise3])
    .then( response => console.log(response))


//WeakRef(element);

class anyClass {
    constructor(element){
        this.ref = new WeakRef(Element);
    }
}

//Asignacion logica 

let isTrue = true;
let isFalse = false;

console.log(isTrue &&= isFalse);
console.log(isTrue||=isFalse);
console.log(isTrue??=isFalse);