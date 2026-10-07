# Acreditación en Alta Calidad — Ingeniería de Sistemas UNIMINUTO

Landing page en React servida con Bun.

## Arrancar

```bash
bun install
bun dev          # http://localhost:3000
bun run build    # salida estática en dist/
```

`bun dev` usa el servidor nativo de Bun con `src/index.html` como punto de entrada
(Bun ≥ 1.2). Si prefieres Vite, mueve `index.html` a la raíz, cambia la ruta del script
a `/src/main.tsx` y usa los scripts de Vite: el resto del código no cambia.

## Estructura

```
uniminuto-acreditacion/
├── bunfig.toml               # sirve public/ como estáticos
├── package.json
├── tsconfig.json
├── public/                   # archivos servidos tal cual
│   ├── media/
│   │   ├── acreditacion.mp4          ← tu video (falta grabarlo)
│   │   └── poster-acreditacion.svg   ← póster provisional
│   └── img/                  # logos e imágenes oficiales
└── src/
    ├── index.html            # punto de entrada, carga las tipografías
    ├── main.tsx              # monta React en #root
    ├── App.tsx               # compone las secciones
    ├── components/
    │   ├── layout/           # Header, Footer
    │   ├── sections/         # una sección de la página por archivo
    │   └── ui/               # piezas reutilizables (Boton, Marca)
    ├── data/contenido.ts     # TODO el texto y los datos, en un solo sitio
    ├── hooks/                # hooks propios
    └── styles/
        ├── tokens.css        # paleta, tipografía, escala, espaciado
        └── global.css        # estilos de las secciones
```

Regla simple: si algo se ve en más de una sección va a `components/ui`; si es una
sección completa va a `components/sections`; si es texto, va a `data/contenido.ts`.

## El video

`src/components/sections/Video.tsx` apunta a `/media/acreditacion.mp4`. Cuando grabes el
definitivo:

1. Guárdalo como `public/media/acreditacion.mp4` (H.264, 1080p, audio AAC).
2. Exporta un fotograma como `public/media/poster-acreditacion.jpg` y actualiza la
   constante `POSTER`.
3. Cambia `esReferencia = false` para quitar la marca de agua «Video de referencia».

Si el archivo no existe, el reproductor muestra un mensaje en su lugar en vez de romperse.

## Paleta

| Token             | Hex       | Uso                                  |
| ----------------- | --------- | ------------------------------------ |
| `--rojo`          | `#da291c` | Color institucional, franjas y CTA   |
| `--rojo-profundo` | `#7c130a` | Hero y pie                           |
| `--rojo-claro`    | `#f6ddd9` | Fondo de la sección de video         |
| `--tinta`         | `#17161a` | Texto                                |
| `--papel`         | `#fafaf8` | Fondo general                        |
| `--ocre`          | `#e9a21b` | Acento puntual en la línea de tiempo |

Los hex son una aproximación del rojo institucional. Antes de entregar, contrástalos con
el manual de identidad vigente de UNIMINUTO y reemplaza el logotipo textual de
`components/ui/Marca.tsx` por el oficial en `public/img/`.

## Fuente de los datos

- Resolución MEN 013054 del 31 de julio de 2023: Acreditación en Alta Calidad por 4 años
  y renovación del registro calificado por 7 años (comunicado de UNIMINUTO).
- SNIES 90714, modalidad presencial.
- Acreditación Institucional en Alta Calidad a la Sede Principal, 19 de febrero de 2024,
  por 6 años.

Proyecto académico. Verifica las cifras antes de publicar.
