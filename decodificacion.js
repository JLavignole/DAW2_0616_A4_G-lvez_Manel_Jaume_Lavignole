// Primera decodificación

function decode1(texto){
    let pares = '';
    let impares = '';
    
    for (let i = 0; i < texto.length; i++) {
        if (i % 2 === 0) {
            pares += texto[i];    // Posiciones pares
        } else {
            impares += texto[i];  // Posiciones impares
        }
    }
    
    return pares + impares;
}

// Segunda decodificacion
function decode2(texto) {
    return texto.split('').reverse().join('');
}