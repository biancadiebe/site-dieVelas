"use client";

import Header from "../src/components/header/header";
import Image from "next/image";
import { Card } from "../src/components/card/card";
import styles from "./home.module.css";
import { PiLeafThin } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { TbCandle } from "react-icons/tb";
import { CardVenda } from "@/src/components/cardVenda/cardVenda";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { NewsLetter } from "@/src/components/newsletter/NewsLetter";

export default function Home() {
  return (
    <>
      <div className={styles.img}>
        <Image
          src="/imagens/velabubble.jpg"
          alt="fundo"
          fill
          className={styles.backgroundImage}
        />

        <Header />
        <div className={styles.divTexto}>
          <h1 className={`${styles["titulo-principal"]}`}>
            Dando aroma para seus momentos
          </h1>
          <button className={styles.botao}>Conheça o catálogo</button>
        </div>
      </div>

      <h2 className={`${styles["subtitulo"]}`}>Sobre o Diê</h2>
      <p className={`${styles["texto"]}`}> Conheça nossos valores </p>
      <div className={styles.divCards}>
        <Card icon={<PiLeafThin />} label="100% vegana" />
        <Card icon={<IoMdHeartEmpty />} label="Feito à mão" />
        <Card icon={<TbCandle />} label="Personalizadas" />
      </div>

      <h2 className={`${styles["subtitulo"]}`}>Nosso Catalógo</h2>
      <p className={`${styles["texto"]}`}>Descubra nossos aromas</p>
      <p>
        <a href="#" className={styles["sub-texto"]}>
          Ver todos <FaLongArrowAltRight />
        </a>
      </p>

      <div className={styles.divVendas}>
        <CardVenda
          icon={<MdOutlineShoppingCart />}
          label="Compre agora"
          title="Vela de Cera Natural"
          price="29,90"
          img="/imagens/velabubble.jpg"
        />
        <CardVenda
          icon={<MdOutlineShoppingCart />}
          label="Compre agora"
          title="Vela de Cera Natural"
          price="29,90"
          img="/imagens/velabubble.jpg"
        />
        <CardVenda
          icon={<MdOutlineShoppingCart />}
          label="Compre agora"
          title="Vela de Cera Natural"
          price="29,90"
          img="/imagens/velabubble.jpg"
        />
      </div>

	  	<NewsLetter />
    </>
  );
}
