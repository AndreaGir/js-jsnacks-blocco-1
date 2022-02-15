let invitati = ['andrea', 'marco', 'francesca', 'franco']

let tuonome = prompt('dimmi il tuo nome')

let i ;

let trovato = false;

for( i = 0; i < invitati.length ; i++ ){

    
    if ( tuonome === invitati[i]){
        
        trovato = true;
        
    }
    
}
    
if ( trovato){
    alert('puoi entrare')
}else{
    alert('esci fuoriiiii!!!')
}
       


