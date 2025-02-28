// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombre = [];

function agregarAmigo(){
    
    let nombreAmigo = document.getElementById('amigo').value.trim();
    if(nombreAmigo){
        nombre.push(nombreAmigo);
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = nombreAmigo;
        listaAmigos.appendChild(nuevoElemento);
    } else{
        alert('Introduce un nombre')
    }
    
    console.log(nombre)
    console.log(nombreAmigo)
    limpiar()
    return nombre;
}

function limpiar() {
    document.getElementById('amigo').value = '';
}


function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 

    if (nombre.length === 0) {
        resultado.innerHTML = '<li>No hay amigos en la lista.</li>';
        return;
    }

    let amigoSorteado = nombre[Math.floor(Math.random() * nombre.length)];
    
    let elementoResultado = document.createElement('li');
    elementoResultado.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    resultado.appendChild(elementoResultado);
}

agregarAmigo();