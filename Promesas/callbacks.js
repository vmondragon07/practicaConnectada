
const paises = ['Francia', 'Holanda', 'Argentina', 'España', 'Portugal']

function nuevoPais(pais, callback){
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 2000);
}

function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais=>{
            console.log(pais);
        })
    }, 2000);
}

mostrarPaises();
//Un callback es cuando una función espera el resultado de otra función 

nuevoPais("Canada", mostrarPaises);

iniciarCallBackHell();

//Llamadas de regreso que pueden ser indeterminadas => callback hell

function iniciarCallBackHell() {
    setTimeout(() => {
        nuevoPais("Egipto", mostrarPaises);

        setInterval(() => {
            
            nuevoPais("Australia", mostrarPaises);

        }, 3000);

    }, 3000);
}

