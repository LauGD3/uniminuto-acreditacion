import Marca from "../ui/Marca";
import { navegacion } from "../../data/contenido";

export default function Header() {
  return (
    <header className="barra">
      <div className="contenedor barra__fila">
        <Marca />
        <nav className="barra__nav" aria-label="Secciones de la página">
          {navegacion.map((item) => (
            <a key={item.href} href={item.href}>
              {item.texto}
            </a>
          ))}
          <a className="boton" href="#inscripcion">
            Conocer el programa
          </a>
        </nav>
      </div>
    </header>
  );
}
