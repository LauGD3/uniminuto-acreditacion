import { pilares } from "../../data/contenido";

export default function Programa() {
  return (
    <section className="seccion" id="programa">
      <div className="contenedor">
        <h2 className="seccion__titulo">Lo que se estudia detrás del sello</h2>
        <p className="seccion__intro">
          La formación combina fundamentos de ingeniería con práctica temprana: los
          estudiantes trabajan en proyectos reales y salen con competencias en cuatro
          frentes.
        </p>

        <ul className="pilares">
          {pilares.map((pilar) => (
            <li className="pilar" key={pilar.titulo}>
              <h3>{pilar.titulo}</h3>
              <p>{pilar.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
