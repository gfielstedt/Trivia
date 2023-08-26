function agregarNombreEnTrivia() {
  alert("Bienvenida: " +  document.getElementById('inputNombre').value )
}

let  botonNombre = document.getElementById('botonNombre')
botonNombre.addEventListener('click', agregarNombreEnTrivia)

