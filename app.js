let numerosecreto = 0;
let numeroIntentos = 0;
let Numeromaximo=10;
let ListaNumeroSorteados=[];

console.log(numerosecreto);

function Verificarintento(){
    let NumeroUsuario=parseInt(document.getElementById('Valorusuario').value);

    console.log(numeroIntentos);

if (NumeroUsuario===numerosecreto){
    asignarTexto("P",`Acertaste el número en ${numeroIntentos} ${(numeroIntentos===1) ? 'Vez' : 'Veces'}` );
    document.getElementById('reiniciar').removeAttribute('disabled');


}else{
    if (NumeroUsuario<numerosecreto){
        asignarTexto("p","el número secreto es mayor");
    }else{
        asignarTexto("p","el número secreto es menor");
    }

    numeroIntentos++;
    limpiar();
}
    
    return;
}

function asignarTexto (elemento,texto){
    let elementoHTML = document.querySelector(elemento);// seleccionar elementos de la estructura HTML
    elementoHTML.innerHTML = (texto); //insertar texto Valor a la variable titulo
    return;
}

function AsignarNumeroSecreto () {
    let NumeroGenerado = Math.floor(Math.random()*Numeromaximo)+1;

    console.log(NumeroGenerado);
    console.log(ListaNumeroSorteados);
    // YA SORTEAMOS TODOS LOS NUMEROS ?
    if(ListaNumeroSorteados.length==Numeromaximo){
        asignarTexto('p','Ya se sortearon todos los Números Posibles');
    }else{
        // si el numero generado ya esta en la lista generamos un nuevo numero si no siga normalmente
        if(ListaNumeroSorteados.includes(NumeroGenerado)){
            return AsignarNumeroSecreto();
            
               } else{
                ListaNumeroSorteados.push(NumeroGenerado);
                return NumeroGenerado;
            } 
    }

    
    
}

function limpiar (){
    document.querySelector ('#Valorusuario').value="";
}

function parametrosIniciales (){
    asignarTexto ("h1","Juego del número secreto");
    asignarTexto ("p",`Inserte un número del 1 al ${Numeromaximo}`)
    numerosecreto = AsignarNumeroSecreto();
    numeroIntentos = 1;
}

function ReiniciarJuego (){
    //limpiar juego caja de texto
    limpiar();
    //mensaje de indicar un número de 1 a 10
    //reiniciar el número aleatorio
    //reiniciar la cantidad de intentos
    parametrosIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector ('#reiniciar').setAttribute('disabled','true');

}

parametrosIniciales();

