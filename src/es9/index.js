

//Spread operator para crear extraer propiedades de un objeto

const obj = {
    name: 'Luis',
    age: 18,
    country: 'MXN',
}

//Operador de reposo o spread operator, permitiendo una desestructuracion
//De objetos mucho mas agil a la hora de trabajar con objetos
//Extrayendo el que necesitamos o el que no para dejar solo aquellos
//Que realmente usaremos

let {name , ...all} = obj;

console.log(name, all);


//Propiedades de propagacion para unir propiedades de uno o mas onjetos
//en uno nuevo 
//El spread operator permite crear una copia exacta de un objeto o 
//un array para crear nuevos o extraer propiedades de manera agil 

const obj2 = {
    name: 'Luis',
    age: 18
}

const obj3 = {
    ...obj2,
    country : 'MXN'
}

console.log(obj3);


//Promise.finally
//Permite ejecutar cierta logica al finalizar una promesa


const helloWorld = ()=>{
    return new Promise( (resolve, reject)=>{
        if(true){
            
            setTimeout( ()=>{
                resolve('Hello world');
            }, 3000);

        }else{
            reject('Hubo un error');
        }
    });
}

//Ejecutando una logica una ves que la promesa ha finalizado 
helloWorld()
    .then( response => console.log(response))
    .catch( error => console.log(error))
    .finally( ()=> console.log('Finalizado'))


//Regex con mejoras para trabajar con ellos agrupando bloques de regex y 
//accediendo a cada uno 

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ //Esto es un regex

const matchRegex = regexData.exec('2018-04-20');

//Extrallendo bloques del regex
const year = matchRegex[1];
const month = matchRegex[2];
const day = matchRegex[3];

console.log(year, month, day);