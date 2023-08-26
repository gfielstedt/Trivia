function seleccionarRespuestaPregunta1() {
  if (document.getElementById("Futbol").checked) {
    alert("Pregunta 1: RESPUESTA CORRECTA");
  } else {
    alert("Pregunta 1: RESPUESTA INCORRECTA");
  }
}

function seleccionarRespuestaPregunta2() {
  if (document.getElementById("LanzamientoDeJabalina").checked) {
    alert("Pregunta 2: RESPUESTA CORRECTA");
  } else {
    alert("Pregunta 2: INCORRECTA");
  }
}

function seleccionarRespuestaPregunta3() {
  if (document.getElementById("GranBretaña").checked) {
    alert("Pregunta 3: RESPUESTA CORRECTA");
  } else {
    alert("Pregunta 3: INCORRECTA");
  }
}

let botonResponder = document.getElementById("Boton Responder");
botonResponder.addEventListener("click", seleccionarRespuestaPregunta1);
botonResponder.addEventListener("click", seleccionarRespuestaPregunta2);
botonResponder.addEventListener("click", seleccionarRespuestaPregunta3);
