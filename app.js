let numeroSecreto = 0;
let intentos = 0;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  console.log(numeroSecreto);
  console.log(intentos);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else{
    //El usuario no acertó.
    if(numeroDeUsuario > numeroSecreto){
      asignarTextoElemento("p", "El número secreto es menor");
    }else{
      asignarTextoElemento("p", "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

function reiniciarJuego(){
  //limpiar caja
  limpiarCaja();
  //indicar mensaje de intervalo de numeros
  //generar el numero aleatorio
  //inicializar el numero de intentos
  condicionesIniciales();
  //deshabilitar el boton de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function limpiarCaja() {
  let valorCaja = document.querySelector("#valorUsuario").value = '';
}

function condicionesIniciales(){
  asignarTextoElemento("h1", "¡Juego del número secreto!");
  asignarTextoElemento("p", "Indica un número del 1 al 10:");
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

condicionesIniciales();