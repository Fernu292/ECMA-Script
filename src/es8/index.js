
//Object entries que devuelve valores de un objeto dentro de una matriz
//Siendo muy util para acceder a datos pos posision de requerirse

const data = {
    frontend : 'Fernando',
    backend: 'Isabel',
    desing: 'Ana'
}

//Convertirlo a matriz 

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//Object Values

//Devuelve los datos en un arreglo unico de un objeto, retornando 
//Unicamente los valores de las propiedades de nuestro objeto

const values = Object.values(data);

console.log(values);


//Padding 
//Permite añadir strings vacios a nuestro string a cada lado o solo a 
//uno de los lados

const string = 'hello';

console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12, ' -----'));
console.log('food'.padEnd(12, '  -----'));

//Tralling comas, consiste en dejar una coma final que establece que 
//Se pueden agregar mas caracteristicas 

const obj = {
    nombre: 'Luis',
}


//Async Await 

//Permite trabajar con promesas de manera mas eficiente
//Evitando anidamiento de callbacks

const helloWorld = ()=>{
    return new Promise( (resolve, reject)=>{
        (true)
        ?setTimeout(()=> resolve('Hello world'), 3000)
        : reject( new Error('Test error') );

    })
}

const helloAsync = async ()=>{

    const hello = await helloWorld();

    console.log(hello);
}


//Una forma mas correcta para trabajar con async await para manejar los 
//Errores
const anotherFunction = async ()=>{
    try{
        const hello = await helloWorld();
        console.log(hello)
    }
    catch(error){
        console.log(error);
    }
}

helloAsync();
anotherFunction();