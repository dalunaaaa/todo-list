export function tarea(indice, titulo, estado, fechas, fechaEn, listaintegrantes) {
    let div = document.createElement('div');
    div.className = "tarea";

    // número de la tarea
    let divNumero = document.createElement('div');
    divNumero.className = "numero";
    divNumero.textContent = indice;
    div.appendChild(divNumero);

    // título de la tarea > h3
    let h3Titulo = document.createElement('h3');
    h3Titulo.className = "titulo";
    h3Titulo.textContent = titulo;
    div.appendChild(h3Titulo);

    // estado de la tarea > div
    let divEstado = document.createElement('div');
    divEstado.className = estado === "completado" ? "estado completado" : "estado";
    divEstado.textContent = estado;
    div.appendChild(divEstado);

    // fecha de asignación > span
    let spanFechaAsignacion = document.createElement('span');
    spanFechaAsignacion.className = "fecha-asignacion";
    spanFechaAsignacion.textContent = fechas;
    div.appendChild(spanFechaAsignacion);

    // fecha de entrega > span
    let spanFechaEntrega = document.createElement('span');
    spanFechaEntrega.className = "fecha-entrega";
    spanFechaEntrega.textContent = fechaEn;
    div.appendChild(spanFechaEntrega);

    // listado de integrantes > div
    let divIntegrantes = document.createElement('div');
    divIntegrantes.className = "integrantes";
    listaintegrantes.forEach(integrante => {
        let spanIntegrante = document.createElement('span');
        spanIntegrante.className = "integrante";
        spanIntegrante.textContent = integrante;
        divIntegrantes.appendChild(spanIntegrante);
    });
    div.appendChild(divIntegrantes);

    // botón de eliminar tarea > div + emoji
    let divEliminar = document.createElement('div');
    divEliminar.className = "eliminar";
    let emojiEliminar = document.createElement('span');
    emojiEliminar.className = "emoji-eliminar";
    emojiEliminar.textContent = "🗑️";
    divEliminar.appendChild(emojiEliminar);
    div.appendChild(divEliminar);

    return div;
}
