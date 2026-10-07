import Marca from "../ui/Marca";

export default function Footer() {
  return (
    <footer className="pie">
      <div className="contenedor">
        <div className="pie__fila">
          <Marca bajada="Ingeniería de Sistemas" />
          <p className="pie__nota">
            Programa de Ingeniería de Sistemas, modalidad presencial. SNIES 90714.
            Acreditación en Alta Calidad y renovación de registro calificado mediante
            Resolución 013054 del 31 de julio de 2023 del Ministerio de Educación Nacional.
          </p>
        </div>
        <p className="pie__legal">
          Pieza elaborada con fines académicos para un curso de la Corporación
          Universitaria Minuto de Dios. Los datos provienen de comunicados públicos de
          UNIMINUTO y del Ministerio de Educación Nacional. Reemplaza este aviso y los
          logotipos por los oficiales antes de cualquier publicación institucional.
        </p>
      </div>
    </footer>
  );
}
