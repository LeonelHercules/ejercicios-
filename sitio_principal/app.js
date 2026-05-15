document.getElementById("btn-saludar")
.addEventListener("click", function() {
    alert("Hola mundo desde javascript externo");
});

function validarFormulario() {
   const nombre = document.getElementById("nombre").value;
   const correo = document.getElementById("correo").value;
   const mensaje = document.getElementById("mensaje").value;

   if (nombre.trim() === "" || correo.trim() === "" || mensaje.trim() === "") {
       alert("Por favor, completa todos los campos del formulario.");
       return false;
   }
   return true;
}

document.getElementById("formulario1").addEventListener("submit", function(event) {
    if (!validarFormulario()) {
        event.preventDefault();
    }
});