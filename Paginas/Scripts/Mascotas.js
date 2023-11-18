$(document).ready(function () {
    //Registrar los botones para responder al evento click

    $("#dvMenu").load("../Paginas/Menu.html")
    //Registrar los botones para responder al evento click
    $("#btnInsertar").on("click", function () {
        Insertar()
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


const Consultar = async () => {
    try {
        let resp = awaitfetch("https://localhost:44385/api/pets", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}


let tblMascotas = document.getElementById("tblMascotas")
// función para llamar el servicio 
const traerDatos = async () => {
    const response = await fetch("http://localhost:44385/api/pets", {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.status === 200) {
        const data = await response.json();
        // muestra en consola
        console.log(data);
        data.map((elemento) => MostrarDatos(elemento));
    } else {
        console.log("Error" + response.statusText);
    }
};

//funcion para crear la tabla
MostrarDatos = (elemento) => {
    // se crea una variable en donde se guarda el tr que es creado en HTML
    let fila = document.createElement('tr');
    let columna = document.createElement('td');
    columna.textContent = elemento.IDSpecies;
    fila.appendChild(columna);
    ////Mostrar datos de especie
    //let columnaEspecie = document.createElement('td');
    //columnaEspecie.textContent = elemento.Especie;
    //fila.appendChild(columnaEspecie);
    //mostrar datos de edad
    let columnaEdad = document.createElement('td');
    columnaEdad.textContent = elemento.PetAge;
    fila.appendChild(columnaEdad);
    //Mostrar peso 
    let columnaPeso = document.createElement('td');
    columnaPeso.textContent = elemento.PetWeight;
    fila.appendChild(columnaEdad);

    tblMascotas.appendChild(fila);

}
traerDatos();

