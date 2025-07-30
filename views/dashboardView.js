import { header } from "../components/header/headerComponent.js";
import { footer } from "../components/footer/footerComponent.js";
export function dashboard() {
    let seccion = document.createElement('section'); // 🛠️ corregido (era 'seccion' con doble c)
    seccion.appendChild(header());
    seccion.appendChild(footer());
    return seccion;
}

document.body.appendChild(dashboard());
