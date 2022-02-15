let arrayVuoto = []

let i ; 

for(i = 0; i < 6 ; i++){

    const chiediNumero = parseFloat ( prompt('dimmi un numero') );

    if(chiediNumero % 2 === 1 ){
        arrayVuoto.push(chiediNumero)
    }else {

    }
    
}
console.log(arrayVuoto)