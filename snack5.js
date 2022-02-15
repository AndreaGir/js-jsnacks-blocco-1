let arrayVuoto = []

let i ; 

for(i = 0; i < 6 ; i++){

    let chiediNumero = prompt('dimmi un numero')

    if(chiediNumero % 3 == 0){
        arrayVuoto.push(chiediNumero[i])
    }else {

    }
    
}
console.log(arrayVuoto.length)