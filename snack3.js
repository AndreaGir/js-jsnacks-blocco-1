let i;

let chiedereNumero ;

let array = [];

let somma = 0;

for(i = 0; i < 5 ; i++ ){
    chiedereNumero = prompt('dimmi un numero')
    array.push( chiedereNumero )
    somma += array[i]
}



console.log(somma)