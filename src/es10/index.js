

let array = [1,2,3, [ 1,2,3, [1,2,3] ]];

//Permite retornar una matriz de manera aplanada para ver un array
//de mejor manera, es decir visualizar los datos de una matriz dentro de 
//un mismo array 

console.log( array.flat(2) );

let array2 = [1,2,3,4,5];

//Flat map permite iterar en matrices y realizar una accion por cada 
//iteracion como el metodo map 
console.log( array.flatMap( value => [value, value*2]));


//Eliminar los espacios en blanco de un string
//Con la funcion de trim() y sus variantes trimstart()  y trimend()

let hello = '   hello wolrd';
let hello2 = 'hello world   ';

console.log( hello );
console.log( hello.trimStart() );
console.log( hello2 );
console.log( hello2.trimEnd() );

//Try catch para el manejo de los errores en funciones async await

try{
    console.log('Hola');
}catch{
    //Ahora se puede omitir el error en la parte del catch 
    //dejandolo de manera mas implicita
    error;
}


//From entries que permite transformar array en un objeto
//Haciendo uso de Object.fromEntries();

let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));


//Objeto de tipo simbolo que permite acceder a datos opcionales de Mysymbol
//De tipo descripcion de un objeto de tipo simbolo
let myStmbl = `My symbol`;
let symbol = Symbol(myStmbl);
console.log(symbol.description);