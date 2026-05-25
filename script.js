    function iniciarSesion() {

    let usuario = document.getElementById("usuario").value;

    let contrasena = document.getElementById("contrasena").value;

    if (usuario === "admin" && contrasena === "12345") {

        document.getElementById("loginBox").style.display = "none";

        document.getElementById("modulos").style.display = "block";

    } else {

        document.getElementById("mensajeError").innerText =
            "Usuario o contraseña incorrectos";
    }
}