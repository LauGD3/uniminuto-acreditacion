import { criterios } from "../../data/contenido";

export default function QueSignifica() {
  return (
    <section className="seccion" id="que-significa">
      <div className="contenedor dupla">
        <div>
          <h2 className="seccion__titulo">
            La acreditación no se pide: se demuestra
          </h2>
          <p className="seccion__intro">
            Es el acto por el cual el Estado reconoce que un programa cumple con
            estándares de calidad comprobables. No es una etiqueta publicitaria: se
            sustenta en evidencia, tiene vigencia definida y hay que renovarla.
          </p>
          <p className="seccion__intro">
            Para Ingeniería de Sistemas ese reconocimiento llegó con la Resolución 013054
            del 31 de julio de 2023, por cuatro años, junto con la renovación del registro
            calificado por siete.
          </p>
        </div>

        <ul className="criterios">
          {criterios.map((criterio) => (
            <li className="criterio" key={criterio.titulo}>
              <h3>{criterio.titulo}</h3>
              <p>{criterio.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
