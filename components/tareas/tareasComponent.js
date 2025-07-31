import { tarea } from "../../modules/itemTarea/itemTarea.js";

// data actualizada
// data actualizada
let tareasdb = [
    {
        indice: 1,
        titulo: "holamundo1",
        estado: "pendiente",
        fechas: "2025-07-30",
        fechaEn: "2025-08-05",
        listaintegrantes: ["🌸", "⭐"]
    },
    {
        indice: 2,
        titulo: "holamundo2",
        estado: "completado",
        fechas: "2025-07-28",
        fechaEn: "2025-08-02",
        listaintegrantes: ["🎯", "🎨"]
    },
    {
        indice: 3,
        titulo: "holamundo3",
        estado: "pendiente",
        fechas: "2025-07-25",
        fechaEn: "2025-08-01",
        listaintegrantes: ["🚀", "💎"]
    }
];
export function tareas() {
    let div = document.createElement('div');
    div.className = "div-tareas";

    tareasdb.forEach((t) => {
        div.appendChild(tarea(
            t.indice,
            t.titulo,
            t.estado,
            t.fechas,
            t.fechaEn,
            t.listaintegrantes
        ));
    });

    return div;
}
