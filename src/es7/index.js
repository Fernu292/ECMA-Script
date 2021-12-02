

//Includes como metodo de array para verificar si algun dato 
//Se encuentra en nuestro array o no 


//Este metodo nos permite ahorrar iteraciones y busquedas largas que nos 
//hacen usar muchas lineas de codigo
const array = [1,2,3,4,5];

if(array.includes(2)){
    console.log('Existe un 2');
}else{
    console.log('No existe un 2');
}


//Potenciacion con **, este operador permite elevar un numero 
//a una potencia determinada ahorrando linead de codigo 
//Y volviendolo mas legible 

const base = 5;
const exponente = 2;

const resultado = base**exponente;

console.log(`El resultado es: ${resultado}`);

//El primer numero sera la base y usaremos ** para elevarlo a cierto 
//Exponente