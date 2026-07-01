"use client";

import { Footer } from "@/src/components/footer/footer";
import Header from "@/src/components/header/header";
import styles from "../home.module.css";
import Filtro from "@/src/components/Filtros/filtro";

export default function Catalogo() {
  return (
    <>
      <Header />
      <h2 className={`${styles["subtitulo"]}`} id="catalogo">
        Nosso Catalógo
      </h2>
      <p className={`${styles["texto"]}`}>Descubra nossos aromas</p>
      <Filtro />
      <Footer />
    </>
  );
}
