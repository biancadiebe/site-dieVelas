"use client";

import Header from "../src/components/header/Header";
import Image from "next/image";
import { Card } from "../src/components/card/Card";
import styles from "./home.module.css";
import { PiLeafThin } from "react-icons/pi";
import { LuSlidersHorizontal } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
import { TbCandle } from "react-icons/tb";
import { CardVenda } from "@/src/components/cardVenda/CardVenda";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Footer } from "@/src/components/footer/Footer";
import { Personalizados } from "@/src/components/personalizados/Personalizados";
import Button from "../src/components/button/Button";
import router from "next/dist/shared/lib/router/router";
import { useRouter } from "next/dist/client/components/navigation";
import { precoMinimoPersonalizado } from "@/src/data/valores";

export default function Home() {
  const router = useRouter();

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
        <div className={styles.divTexto} id="inicio">
          <h1 className={`${styles["titulo-principal"]}`}>
            Dando aroma para seus momentos
          </h1>
          <button
            className={styles.botao}
            onClick={() => router.push("/catalogo")}
          >
            Conheça o catálogo
          </button>
        </div>
      </div>

      <h2 className={`${styles["subtitulo"]}`} id="sobre">
        Sobre o Diê
      </h2>
      <p className={`${styles["texto"]}`}> Conheça nossos valores </p>
      <div className={styles.divCards}>
        <Card
          icon={<PiLeafThin />}
          title="100% vegana"
          description="Sem ingredientes de origem animal."
        />
        <Card
          icon={<IoMdHeartEmpty />}
          title="Feito à mão"
          description="Com carinho e de forma artesanal."
          variant="accent"
        />
        <Card
          icon={<TbCandle />}
          title="Personalizadas"
          description="Para suas comemorações e lembranças."
        />
      </div>

      <h2 className={`${styles["subtitulo"]}`} id="catalogo">
        Nosso Catalógo
        <Button as="link" href="/catalogo" className={styles.filtroButton}>
          <LuSlidersHorizontal />
          Filtros
        </Button>
      </h2>
      <p className={`${styles["texto"]}`}>Descubra nossos aromas</p>
      <p>
        <a href="/catalogo" className={styles["link-ver-todos"]}>
          Ver todos <FaLongArrowAltRight />
        </a>
      </p>

      <div className={styles.divVendas}>
        <CardVenda
          id="9"
          icon={<MdOutlineShoppingCart />}
          label="Compre agora"
          title="Vela Bubble"
          price="50,00"
          img="/imagens/velabubble.jpg"
        />
        <CardVenda
          id="0"
          icon={<MdOutlineShoppingCart />}
          label="Compre agora"
          title="Vela Brotinho de Bambu"
          price="30,00"
          img="/imagens/velabrotinhodebambu.jpg"
        />
        <CardVenda
          id="8"
          icon={<MdOutlineShoppingCart />}
          label="Compre agora"
          title="Vela na Latinha - Personalizada"
          price={precoMinimoPersonalizado("8", "50,00")}
          img="/imagens/velalata.jpeg"
        />
        <CardVenda
          id="13"
          icon={<MdOutlineShoppingCart />}
          label="Compre agora"
          title="Vela Média - Personalizada"
          price={precoMinimoPersonalizado("13", "50,00")}
          img="/imagens/velamedia.jpeg"
        />
      </div>

      <div id="personalizados">
        <h2 className={`${styles["subtitulo"]}`} id="catalogo">
          Velas personalizadas
        </h2>
        <p className={`${styles["texto"]}`}>Feitas para você</p>
        <Personalizados />
      </div>

      <div className="footer" id="footer">
        <Footer />
      </div>
    </>
  );
}
