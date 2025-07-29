import { header } from "../components/header/headerComponent.js";

export function dashboard() {
    let seccion = document.createElement('section'); // 🛠️ corregido (era 'seccion' con doble c)
    seccion.appendChild(header());

    return seccion;
}

document.body.appendChild(dashboard());
