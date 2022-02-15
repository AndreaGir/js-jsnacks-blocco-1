let numero =  prompt('scrivi un numero di 4 cifre') 

let somma = 0; 

let numeriDivisi = numero.split('')
 
for(let i =0 ; i < numeriDivisi.length ; i++){

        const num = parseInt(numeriDivisi[i])

        somma += num

}
console.log(somma)

 