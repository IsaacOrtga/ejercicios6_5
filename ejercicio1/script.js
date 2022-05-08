

/*1. Solicita al usuario tres números enteros e indícale cuál es el menor.*/
function numeros(){
    let n1 = prompt('Inserte número entero');
    let n2 = prompt('Inserte número entero');
    let n3 = prompt('Inserte número entero');
    if(n1<n2 && n1<n3){
        alert(n1 + ' es el menor.');
    }else if(n2<n1 && n2<n3){
        alert(n2 + ' es el menor.');
    }else{
        alert(n3 + ' es el menor.')
    }
}

/*2. Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.*/

function letra() {
    let frase = prompt("Dime una frase");
    let letra = prompt("Elige una letra");
    
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
    
      if (frase[i] == letra) {
        contador = contador + 1;
      }
    }
    alert("La letra seleccionada aparece " + contador+ " veces.");
  }

  /*3. Suma o resta (según elija el usuario) dos números reales*/

  function sumaoresta(){
let valor1 = prompt("Número");
let operador = prompt('Dime un operador de suma o resta');
let valor2 = prompt("Número");

if (operador == '+'){

    alert((parseInt(valor1, 0)) + ((parseInt(valor2, 0))));
}
    

else if(operador !== '+'){
    alert((parseInt(valor1, 0)) - ((parseInt(valor2, 0))));
}
}


/*4. Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos)*/


(function () {
let usuario = "admin";
let contraseña = "admin";
var user, pass;
var intentos = 3;
do{
  user =  prompt('Usuario');
  pass =  prompt('Contraseña');
  intentos--;
}while((user!=usuario || pass!=contraseña) && intentos>0);
if(user==usuario && pass==contraseña){
  alert('Bienvenid@');
}else{
  alert('Intentos agotados');
}
})();


/* 5. Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9, si es una c el 101 y si no es ninguno de los tres, indícale que se ha equivocado de letra*/

function letranumero(){
    var letra =  prompt('Inserta una letra').toLocaleLowerCase()[0];
switch(letra){
  case 'a':
    alert(7);
    break;
  case 'b':
    alert(9);
    break;
  case 'c':
    alert(101);
    break;
  default:
    alert('Te has equivocado de letra');
}
}


    /* 6. Ordena alfabéticamente un array con 7 palabras, puedes usar el algoritmo de la burbuja*/

    function ordenamiento() {
      var array = ["perro", "abeja", "zorro", "murciélago", "gato", "caballo", "vaca"];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if(array[j]>array[j+1]){
          temp = array[j];
          array[j] = array[j+1];
          array[j+1] = temp;
        }
        
      }
      
    }alert(array);
  }