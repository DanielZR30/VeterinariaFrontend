$(document).ready(function () {
    //Registrar los botones para responder al evento click
    $("#dvMenu").load("../Paginas/Menu.html")

    $("#btnInsertar").on("click", function () {
        InsertarProducto()
    });
});

//Función para insertar el producto
async function InsertarProducto()
{
    //Variables de entrada, funcion para insertar el producto
    let idProducto = $("#txtIdProducto").val();
    let nombre = $("#txtNombre").val();
    let descripcion = $("#txtDescripcion").val();
    let precio = $("#txtPrecio").val();
    let categoria = $("#cboCategoria").val();


    let producto = {
        IdProducto: idProducto,
        Nombre: nombre,
        Descripcion: descripcion,
        Precio: precio,
        Categoria: categoria
    }

    try {
        const respuesta = await fetch("http://localhost:44385/api/productos/create",
            {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(producto)
            });

        const rpta = await respuesta.json();
        // Muestra la respuesta en el div mensaje
        $("#dvMensaje").html(rpta);
    }
    catch (error) {
        //Muestra la respyesta en el div mensaje en caso de error 
        $("#dvMensaje").html(error)
    }
}