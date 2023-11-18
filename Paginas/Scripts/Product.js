$(document).ready(function () {
    //Registrar los botones para responder al evento click
   
    $("#dvMenu").load("../Paginas/Menu.html")
    //Registrar los botones para responder al evento click
    $("#btnInsertar").on("click", function () {
        Ingresar()
    });
    $("#btnActualizar").on("click", function () {
        EjecutarComandos("PUT");
    });
    $("#btnEliminar").on("click", function () {
        EjecutarComandos("DELETE");
    });
    $("#btnConsultar").on("click", function () {
        Consultar();
    });
});

async function Ingresar() {
    //Capturo los datos de entrada
    let Idproducto = $("#txtIdProducto").val();
    let Nombre = $("#txtNombre").val();
    let Descripcion = $("#txtDescripcion").val();
    let Precio = $("#txtPrecio").val();
    let Categoria = $("#txtCategoria").val();

    let DatosProducto = {
        Nombre: Nombre,
        Descripcion: Descripcion,
        Precio: Precio,
        Categoria: Categoria
    }
    try {
        const Respuesta = await fetch("https://localhost:44385/api/products/",
            {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(DatosProducto)
            });
        const Rpta = await Respuesta.json();
        $("#dvMensaje").html(Rpta);
    }
    catch (error) {
        //Se presenta la respuesta en el div mensaje
        $("#dvMensaje").html(error);
    }

}
