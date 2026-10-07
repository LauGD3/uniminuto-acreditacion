import { cifras } from "../../data/contenido";

export default function Cinta() {
  return (
    <section className="cinta" aria-label="Datos de la acreditación">
      <div className="contenedor">
        <ul className="cinta__lista">
          {cifras.map((dato) => (
            <li className="cinta__dato" key={dato.valor}>
              <span className="cinta__valor">{dato.valor}</span>
              <span className="cinta__etiqueta">{dato.etiqueta}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
