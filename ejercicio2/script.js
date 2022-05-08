
function boton (){
 let caracter = "";
 const C = 12;
 for (let i = 0; i < C; i++) {
     if(i % 3 == 0){
         caracter += "*";
     }else if(i % 3 == 1){
         caracter += "+";
     }else{
         caracter += "_";
     }
     
 }alert(caracter);
}

