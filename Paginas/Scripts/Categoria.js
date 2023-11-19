
jQuery(function () {
    $("#dvMenu").load("../Paginas/Menu.html")

    $("#btnInsertar").on("click", function () {
        InsertarCategoria()
    })
})

async function InsertarCategoria() {
    let descripcion = $("#txtDescripcionCatergoria").val();

    let Categoria = {
        CategoryDescription: descripcion
    }

    try {
        const Respuesta = await fetch("http://localhost:44385/api/categories/create",
            {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(categoria)
            });
        const Rpta = await Respuesta.json();
        //Se presenta la respuesta en el div mensaje
        $("#dvMensaje").html(Rpta);
    }
    catch (error) {
        //Se presenta la respuesta en el div mensaje
        $("#dvMensaje").html(error);
    }
}
