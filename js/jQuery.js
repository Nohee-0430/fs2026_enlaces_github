$(document).ready(function () {
    // btn1 - Ocultar párrafos
    $("#btn1").click(function () {
        $("#contenedor-parrafos .parrafo-card").hide();
    });

    // btn2 - Mostrar párrafos
    $("#btn2").click(function () {
        $("#contenedor-parrafos .parrafo-card").show();
    });

    // btn3 - Ocultar despacio (slow)
    $("#btn3").click(function () {
        $("#contenedor-parrafos .parrafo-card").hide("slow");
    });

    // btn4 - Mostrar despacio (fast)
    $("#btn4").click(function () {
        $("#contenedor-parrafos .parrafo-card").show("fast");
    });

    // btn5 - Ocultar con slide (2 segundos)
    $("#btn5").click(function () {
        $("#contenedor-parrafos .parrafo-card").slideUp(2000);
    });

    // btn6 - Mostrar con slide (2 segundos)
    $("#btn6").click(function () {
        $("#contenedor-parrafos .parrafo-card").slideDown(2000);
    });

    $("#btnAgregar").click(function () {
        const carnetRandom = "2024-" + Math.floor(1000 + Math.random() * 9000);
        const nombres = ["Ana", "Luis", "Carlos", "Marta", "Sofia", "Jorge"];
        const apellidos = ["García", "Pérez", "Rodríguez", "López", "Martínez"];
        const nombreRandom = nombres[Math.floor(Math.random() * nombres.length)] + " " + apellidos[Math.floor(Math.random() * apellidos.length)];
        const correoRandom = nombreRandom.toLowerCase().replace(" ", ".") + "@ejemplo.com.gt";

        const nuevaFila = `<tr>
            <td>${carnetRandom}</td>
            <td>${nombreRandom}</td>
            <td>${correoRandom}</td>
        </tr>`;

        $("#tablaEstudiantes tbody").append(nuevaFila);
    });

    $("#btnEliminar").click(function () {
        $("#tablaEstudiantes tbody tr:last").remove();
    });

    $("#btnLargo").click(function () {
        const nombre = $("#inputNombre").val();
        if (nombre.trim() === "") {
            alert("Por favor, ingrese un nombre.");
        } else {
            alert("El nombre '" + nombre + "' tiene " + nombre.length + " caracteres.");
        }
    });

    $("#btnPromedio").click(function () {
        const n1 = parseFloat($("#nota1").val());
        const n2 = parseFloat($("#nota2").val());
        const n3 = parseFloat($("#nota3").val());

        if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
            alert("Por favor, ingrese las tres notas correctamente.");
            return;
        }

        const promedio = (n1 + n2 + n3) / 3;
        const resultado = promedio >= 70 ? "APROBADO" : "REPROBADO";
        const color = promedio >= 70 ? "text-success" : "text-danger";

        $("#resultadoPromedio").html(`
            <div class="alert alert-info mt-3">
                <h5>Promedio: ${promedio.toFixed(2)}</h5>
                <p class="fw-bold ${color}">${resultado}</p>
            </div>
        `);
    });

});