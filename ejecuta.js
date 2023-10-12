
let contenedor = document.getElementById("contenedor");


contenedor.addEventListener("click",(e) =>{

let evento = e.target.id;

    //alert (evento);

    if (evento==="btn_suma"){
        valor1 = document.getElementById("valor1").value;
        valor2 = document.getElementById("valor2").value;
        
        let res = document.getElementById("res");
        let suma = parseInt(valor1) + parseInt(valor2);
        res.innerHTML=suma;     
    }

    if (evento==="btn_resta"){
        valor1 = document.getElementById("valor1").value;
        valor2 = document.getElementById("valor2").value;
        
        let res = document.getElementById("res");
        let suma = parseInt(valor1) - parseInt(valor2);
        res.innerHTML=suma;     
    }

    if (evento==="btn_multiplicar"){
        valor1 = document.getElementById("valor1").value;
        valor2 = document.getElementById("valor2").value;
        
        let res = document.getElementById("res");
        let suma = parseInt(valor1) * parseInt(valor2);
        res.innerHTML=suma;     
    }

    if (evento==="btn_divide"){
        valor1 = document.getElementById("valor1").value;
        valor2 = document.getElementById("valor2").value;
        
        let res = document.getElementById("res");
        let suma = parseInt(valor1) / parseInt(valor2);
        res.innerHTML=suma;     
    }

});


