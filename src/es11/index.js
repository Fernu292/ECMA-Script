//Importacion dinamida de elementos de manera dinamica para
//llamar piezas de codigo de manera funcional mejorando el
//Performance de la app

// const button = document.getElementById('btn');

// button.addEventListener('click', async ()=>{
//     const module = await import('./file.js');

//     module.hello();
// });


//Big int que permite crear numeros enteros de tamaños mucho mas
//Grandes de lo normal
const bigNumber = 9090393003930293029302930n;
const anotherBigNumber = BigInt(92029910921929200092929);

console.log(bigNumber);
console.log(anotherBigNumber);


//Promise all setteled
const promise1 = new Promise( (resolve, reject)=> reject('reject'));
const promise2 = new Promise( (resolve, reject)=> resolve('resolve'));
const promise3 = new Promise( (resolve, reject)=> resolve('resolve2'));

//Promise allSettled espera a que todas sean resultas y devuelve los datos
//permitiendo manejar promesas de una mejor manera
Promise.allSettled([promise1, promise2, promise3])
    .then( response => console.log(response));

//Global this

// console.log(window);
console.log(globalThis);

//Operador logico nulo ??

const foo = null ?? 'default string';

console.log(foo);

//Optional shanning que evita que una aplicacion se rompa al no existir valores en un objeto
//evitanto caidas y asignandole undefined

const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log('tenemos email');
}else{
    console.log('Fail')
}