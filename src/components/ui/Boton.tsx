import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variante?: "solido" | "contorno" | "claro";
};

const clases = {
  solido: "boton",
  contorno: "boton boton--contorno",
  claro: "boton boton--claro",
};

export default function Boton({ href, children, variante = "solido" }: Props) {
  return (
    <a className={clases[variante]} href={href}>
      {children}
    </a>
  );
}
