// 1. Solicita al usuario tres números enteros e indícale cuál es el menor.

function Mayor() {
  let n1 = parseInt(prompt("Escribe un número"));
  let n2 = parseInt(prompt("Escribe un segundo número"));
  let n3 = parseInt(prompt("Escribe un tercer número"));

  if (n1 > n2 && n1 > n3) {
    alert("El número mayor es " + n1);
  }
  if (n2 > n1 && n2 > n3) {
    alert("El número mayor es " + n2);
  }
  if (n3 > n1 && n3 > n2) {
    alert("El número mayor es " + n3);
  }
}

// 2. Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.

function countLetter() {
  let phrase = prompt(
    "Escribe una frase, después elige una letra de esa frase"
  );
  let letter = prompt("¿Qué letra quieres buscar en tu frase?");
  let cont = 0;

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] == letter) {
      cont++;
      cont = cont++;
    }
  }
  alert("Hay " + cont + ' "' + letter + '" en tu frase.');
}

// 3. Suma o resta (según elija el usuario) dos números reales

const plusSubstract = () => {
  let plusSub = prompt("Para sumar pulsa 1 - Para restar pulsa 2");
  let n1 = "";
  let n2 = "";
  let resultado = 0;

  if (plusSub == 1) {
    n1 = parseFloat(prompt("Escribe el primer número"));
    n2 = parseFloat(prompt("Escribe el segundo número"));
    resultado = n1 + n2;
    alert(resultado);
  } else if (plusSub == 2) {
    n1 = parseFloat(prompt("Escribe el primer número"));
    n2 = parseFloat(prompt("Escribe el segundo número"));
    resultado = n1 - n2;
    alert(resultado);
  } else {
    alert("Orden desconocida");
  }
};

// 4. Almacena en dos variables datos de validación (usuario y contraseña)
//correctos y permite que el usuario valide (dispone de 3 intentos)

const validation = () => {
  const user = "Isaac";
  const pass = "1234";
  let userLog = "";
  let passLog = "";
  let cont = 0;

  for (let i = 0; i < 3; i++) {
    userLog = prompt("Usuario (dispone de 3 intentos)");
    passLog = prompt("Contraseña (dispone de 3 intentos)");
    if (cont != 3 && userLog != user && passLog != pass) {
      cont++;
      alert("Datos incorrectos");

      if (cont == 3) {
        alert("Ha superado el número de intentos máximos");
      }
    }
  }
};

// 5. Solicita al usuario una letra, si inserta una a muestra el número 7, 
//si es una b, el 9, si es una c el 101 y si no es ninguno de los tres, 
//indícale que se ha equivocado de letra

function letter() {
    let letter = prompt('Inserta una letra');
  
    switch( letter){
        case 'a':
        alert('Tu número es el 7')
        break;
        case 'b':
        alert('Tu número es el 9')
        break;
        case 'c':
        alert('Tu número es el 101')
        break;
        default: alert('Te has equivocado de letra');
    };

}; 

// 6. Ordena alfabéticamente un array con 7 palabras, puedes usar el 
//algoritmo de la burbuja

const burbuja = () => {
  
  //CON ALGORITMO BURBUJA
  
  let palabras = ['luna', 'tierra', 'marte','venus', 'júpiter', 'plutón', ];

  
    for( let j = 0; j < palabras.length; j++ ){
      if(palabras[j] > palabras[j+1]){
        let aux = palabras[j];
        palabras[j] = palabras[j+1];
        palabras[j+1] = aux;
  
      }
    } 
    
  
  alert(palabras);

    

  //SIN ALGORITMO BURBUJA
  //   let letras = ['c', 'D', 'b', 'a', 'e', 'F', 'g'];
    
  //  let ordenar = array => array.sort((a, b) =>
  //  a.toLowerCase() > b.toLowerCase() ? 1 :
  //  a.toLowerCase() < b.toLowerCase() ? -1 :
  //  0
  //  );
  //  alert(ordenar(letras));



}
