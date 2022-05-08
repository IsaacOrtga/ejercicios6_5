function boton(){
    let cad = "";
    const N = 12;
    for (let i = 0; i < N; i++) {
        if(i % 3 == 0) {
            cad += "*"
        }else if(i % 3 == 1){
            cad += "+"
        }else{
            cad += "_"
        }
        
        
    }
    alert(cad);
    }
