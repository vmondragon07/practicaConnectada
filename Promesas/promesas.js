/*const aplicarDesc = new Promise ((resolve, reject) =>{
    const descuento = false;

    if(descuento){
        resolve("Descuento aplicado")
    }else{
        reject("No se pudo aplicar descuento")
    }
})

//THEN SE VA A EJECUTAR DESPUES DE RECIBIR LA RESPUESTA
aplicarDesc.then(resultado =>{
    console.log(resultado);
//CATCH SE EJECUTA EN CASO DE ERROR.
}).catch(error => {
    console.log(error);
})

console.log(aplicarDesc);*/

//HAY 3 POSIBLES RESULTADOS EN LAS PROMESAS
//RESUELTO (TRUE), RECHAZADO (FALSE), PEDING (QUE AUN NO SE HA CUMPLIDO PERO TAMPOCO SE HA EJECUTADO)

const paises = [];
const nuevoPais = pais => new Promise(resolve => {
    setTimeout(() => {
        paises.push(pais)
        resolve(`Agregado ${pais}`)
    }, 3000);
})

nuevoPais('Alemania').then(resultado => {
    console.log(resultado);
    console.log(paises);
    return nuevoPais('Egipto')

}).then(resultado => {
    console.log(resultado);
    console.log(paises);
    return nuevoPais('Inglaterra')
})
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
    })