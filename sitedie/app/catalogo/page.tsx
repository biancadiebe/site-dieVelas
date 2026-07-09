"use client";

import { Footer } from "@/src/components/footer/footer";
import Header from "@/src/components/header/header";
import styles from "./catalogo.module.css";
import Filtro from "@/src/components/Filtros/filtro";
import { CardVenda } from "@/src/components/cardVenda/cardVenda";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";

export default function Catalogo() {
  return (
    <>
      <Header />
      <h2 className={`${styles["subtitulo"]}`} id="catalogo">
        Nosso Catalógo
      </h2>
      <p className={`${styles["texto"]}`}>Descubra nossos aromas</p>
      <div className={styles.divCatalogo}>
        <Filtro />
        <div className={styles.cardVendas}>
          <CardVenda
            icon={<MdOutlineShoppingCart />}
            label="Compre agora"
            title="Vela média"
            price="29,90"
            img="/imagens/velamedia.jpg"
            promocao="Promoção"
            favorito={<IoMdHeartEmpty />}
          />

          <CardVenda
            icon={<MdOutlineShoppingCart />}
            label="Compre agora"
            title="Vela média"
            price="29,90"
            img="/imagens/velamedia.jpg"
            favorito={<IoMdHeartEmpty />}
          />

          <CardVenda
            icon={<MdOutlineShoppingCart />}
            label="Compre agora"
            title="Vela média"
            price="29,90"
            img="/imagens/velamedia.jpg"
            favorito={<IoMdHeartEmpty />}
          />

          <CardVenda
            icon={<MdOutlineShoppingCart />}
            label="Compre agora"
            title="Vela média"
            price="29,90"
            img="/imagens/velamedia.jpg"
            promocao="Promoção"
            favorito={<IoMdHeartEmpty />}
          />

          <CardVenda
            icon={<MdOutlineShoppingCart />}
            label="Compre agora"
            title="Vela média"
            price="29,90"
            img="/imagens/velamedia.jpg"
            favorito={<IoMdHeartEmpty />}
          />

          <CardVenda
            icon={<MdOutlineShoppingCart />}
            label="Compre agora"
            title="Vela média"
            price="29,90"
            img="/imagens/velamedia.jpg"
            favorito={<IoMdHeartEmpty />}
          />

          <CardVenda
            icon={<MdOutlineShoppingCart />}
            label="Compre agora"
            title="Vela média"
            price="29,90"
            img="/imagens/velamedia.jpg"
            favorito={<IoMdHeartEmpty />}
          />

          <CardVenda
            icon={<MdOutlineShoppingCart />}
            label="Compre agora"
            title="Vela média"
            price="29,90"
            img="/imagens/velamedia.jpg"
            favorito={<IoMdHeartEmpty />}
          />
          <CardVenda
            icon={<MdOutlineShoppingCart />}
            label="Compre agora"
            title="Vela média"
            price="29,90"
            img="/imagens/velamedia.jpg"
            favorito={<IoMdHeartEmpty />}
          />
          <CardVenda
            icon={<MdOutlineShoppingCart />}
            label="Compre agora"
            title="Vela média"
            price="29,90"
            img="/imagens/velamedia.jpg"
            favorito={<IoMdHeartEmpty />}
          />
          <CardVenda
            icon={<MdOutlineShoppingCart />}
            label="Compre agora"
            title="Vela média"
            price="29,90"
            img="/imagens/velamedia.jpg"
            promocao="Promoção"
            favorito={<IoMdHeartEmpty />}
          />
          <CardVenda
            icon={<MdOutlineShoppingCart />}
            label="Compre agora"
            title="Vela média"
            price="29,90"
            img="/imagens/velamedia.jpg"
            favorito={<IoMdHeartEmpty />}
          />
        </div>
      </div>

      <p className={styles.paginas}>
        {" "}
        <FaArrowLeftLong /> 1 2 3 4 5 <FaArrowRight />{" "}
      </p>
      <Footer />
    </>
  );
}
