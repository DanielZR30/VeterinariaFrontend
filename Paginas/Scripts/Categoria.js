
jQuery(function () {
    $("#dvMenu").load("../Paginas/Menu.html")

    $("#btnBuscar").on("click", function () {
        BuscarProductosC();
    });

    $("#btnComprar").on("click", function () {
        ComprarProducto();
    });
});

async function BuscarProductosC() {
    let CategoriaS = $("#cboCategoria").val();

    if (CategoriaS === "") {
        alert("Por favor, selecciona una categoría")
        return;
    }

    try {
        const Respuesta = await fetch("http://localhost:44385/api/productos/BuscarCategoria" + CategoriaS
            {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(categoria)
            });
        const preoductos = await Respuesta.json();
        //Se presenta la respuesta en el div mensaje
        $("#dvMensaje").html(Rpta);
    }
    catch (error) {
        //Se presenta la respuesta en el div mensaje
        $("#dvMensaje").html(error);
    }
}

async function ComprarP() {

}
