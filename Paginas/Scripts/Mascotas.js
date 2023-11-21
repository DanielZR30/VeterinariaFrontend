$(document).ready(function () {
    //Registrar los botones para responder al evento click
    $("#dvMenu").load("../Paginas/Menu.html");

    $("#btnInsertar").on("click", function () {
        EjecutarComandos("POST");
    });

    $("#btnActualizar").on("click", function () {
        EjecutarComandos("PUT");
    });

    $("#btnEliminar").on("click", function () {
        EjecutarComandos("DELETE");
    });

    $("#btnConsultar").on("click", function () {
        ConsultarMascota();
    });


});

// Función para insertar una mascota
async function ConsultarMascota() {
    let nombre = $("#txtNombre").val();

    try {
        const respuesta = await fetch(`http://localhost:44385/api/mascotas?nombre=${nombre}`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const mascota = await respuesta.json();

        // Llenar los campos de la página con la información de la mascota
        $("#txtNombre").val(mascota.Nombre);
        $("#txtNombreEspecie").val(mascota.Especie);
        $("#txtEdad").val(mascota.Edad);
        $("#txtPeso").val(mascota.Peso);

        $("#dvMensaje").html("Mascota consultada exitosamente");
    } catch (error) {
        $("#dvMensaje").html(error);
    }
}

async function EjecutarComandos(Comando) {
    let nombre = $("#txtNombre").val();
    let especie = $("#txtNombreEspecie").val();
    let edad = $("#txtEdad").val();
    let peso = $("#txtPeso").val();

    let mascota = {
        Nombre: nombre,
        Especie: especie,
        Edad: edad,
        Peso: peso
    };

    try {
        const respuesta = await fetch("http://localhost:44385/api/Mascotas", {
            method: Comando,
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mascota)
        });

        const resultado = await respuesta.json();
        $("#dvMensaje").html(resultado);
    } catch (error) {
        $("#dvMensaje").html(error);
    }
}
