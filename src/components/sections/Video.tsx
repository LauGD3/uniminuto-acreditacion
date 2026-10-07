import { useState } from "react";

/**
 * Video de la landing.
 *
 * Hoy apunta a un archivo de referencia. Cuando grabes el tuyo:
 *   1. Guárdalo en  public/media/acreditacion.mp4
 *   2. Exporta un fotograma como public/media/poster-acreditacion.jpg
 *   3. Cambia `esReferencia` a false para quitar la marca de agua.
 *
 * Si prefieres incrustar un video alojado en YouTube o Vimeo, reemplaza
 * el bloque <video> por un <iframe> con el mismo contenedor .video__marco.
 */

const FUENTE = "/media/acreditacion.mp4";
const POSTER = "/media/poster-acreditacion.svg";
const esReferencia = true;

export default function Video() {
  const [falla, setFalla] = useState(false);

  return (
    <section className="seccion seccion--tinte" id="video">
      <div className="contenedor">
        <div className="video__cabecera">
          <h2 className="seccion__titulo">
            Lo que significó para el programa, contado por su gente
          </h2>
        </div>

        <div className="video__marco">
          {esReferencia && <span className="video__aviso">Video de referencia</span>}

          {falla ? (
            <div className="video__respaldo">
              <span>
                 <code>public/media/acreditacion.mp4</code>                 
              </span>
            </div>
          ) : (
            <video
              controls
              preload="metadata"
              poster={POSTER}
              playsInline
              onError={() => setFalla(true)}
            >
              <source src={FUENTE} type="video/mp4" />
              Tu navegador no puede reproducir este video.
            </video>
          )}
        </div>
      </div>
    </section>
  );
}
