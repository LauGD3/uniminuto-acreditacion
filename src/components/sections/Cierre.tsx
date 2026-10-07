import Boton from "../ui/Boton";

export default function Cierre() {
  return (
    <section className="cierre" id="inscripcion">
      <div className="contenedor">
        <h2 className="cierre__titulo">Estudia en un programa que ya fue evaluado</h2>
        <p>
          Ingeniería de Sistemas se ofrece en modalidad presencial bajo el código SNIES
          90714. Consulta el plan de estudios, los campus y las fechas de inscripción.
        </p>
        <div className="cierre__acciones">
          <Boton href="https://www.uniminuto.edu/oferta-academica" variante="claro">
            Ver la oferta académica
          </Boton>
        </div>
      </div>
    </section>
  );
}
