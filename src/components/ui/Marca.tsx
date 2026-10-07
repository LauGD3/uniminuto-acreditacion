type Props = {
  /** Texto pequeño bajo el nombre. Pásalo vacío para ocultarlo. */
  bajada?: string;
};

export default function Marca({ bajada = "Facultad de Ingeniería" }: Props) {
  return (
    <a className="marca" href="#inicio">
      <span className="marca__signo" aria-hidden="true" />
      <span className="marca__nombre">
        UNIMINUTO
        {bajada ? <span>{bajada}</span> : null}
      </span>
    </a>
  );
}
