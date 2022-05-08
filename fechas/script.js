let day1 = parseInt(prompt("Introduzca un día:"));
let month1 = parseInt(prompt("Introduzca un día:"));
let day2 = parseInt(prompt("Introduzca un día:"));
let month2 = parseInt(prompt("Introduzca un día:"));
let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let countD = 0;
let countM = 0;

for(let i = month1; i<month2; i++){
    countM = countM + months[i];

}
countD = countM-(day1-1)+day2;
if(countD == 1){
   
}
 alert("Faltan "+ countD + " días.")