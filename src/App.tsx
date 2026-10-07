import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Cinta from "./components/sections/Cinta";
import QueSignifica from "./components/sections/QueSignifica";
import Video from "./components/sections/Video";
import Programa from "./components/sections/Programa";
import Hitos from "./components/sections/Hitos";
import Cierre from "./components/sections/Cierre";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <a className="saltar" href="#contenido">
        Ir al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Cinta />
        <QueSignifica />
        <Video />
        <Programa />
        <Hitos />
        <Cierre />
      </main>
      <Footer />
    </>
  );
}
