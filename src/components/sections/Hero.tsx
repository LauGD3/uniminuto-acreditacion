import Boton from "../ui/Boton";
import { ficha } from "../../data/contenido";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="contenedor hero__grid">
        <div className="revelar">
          <span className="hero__sello">Ministerio de Educación Nacional</span>
          <h1 className="hero__titular">
            Ingeniería de Sistemas es un programa acreditado en alta calidad
          </h1>
          <p className="hero__entrada">
            El Estado colombiano reconoció públicamente la calidad del programa en
            UNIMINUTO: su plan de estudios, su organización y su aporte social pasaron
            por autoevaluación y por la visita de pares académicos externos.
          </p>
          <div className="hero__acciones">
            <Boton href="#video" variante="claro">
              Ver el video
            </Boton>
            <Boton href="#que-significa" variante="claro">
              Qué significa la acreditación
            </Boton>
          </div>
        </div>

        <div className="ficha">
          <h2 className="ficha__titulo">Acto administrativo</h2>
          <dl className="ficha__lista">
            {ficha.map((fila) => (
              <div className="ficha__fila" key={fila.termino}>
                <dt>{fila.termino}</dt>
                <dd>{fila.valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
