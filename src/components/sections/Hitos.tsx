import { hitos } from "../../data/contenido";

export default function Hitos() {
  return (
    <section className="seccion" id="hitos">
      <div className="contenedor">
        <h2 className="seccion__titulo">Cómo llegó el programa hasta aquí</h2>
        <p className="seccion__intro">
          El reconocimiento al programa es parte de una secuencia más larga de
          aseguramiento de la calidad en la institución.
        </p>

        <ol className="hitos">
          {hitos.map((hito) => (
            <li className="hito" key={hito.fecha}>
              <span className="hito__fecha">{hito.fecha}</span>
              <div>
                <h3>{hito.titulo}</h3>
                <p>{hito.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
