function triangulo(){
    var asteriscos = "";
    for(let i=1; i<=5; i++){
        for(let j=0; j<i; j++){
            asteriscos  += "*";
        }
        asteriscos += "\n"
    }
    alert(asteriscos);
}