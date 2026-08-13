"use client";

import { Footer } from "@/src/components/footer/Footer";
import Header from "@/src/components/header/Header";
import styles from "./catalogo.module.css";
import Filtro from "@/src/components/Filtros/Filtro";
import { CardVenda } from "@/src/components/cardVenda/CardVenda";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";
import { FaFilter } from "react-icons/fa6";
import Button from "@/src/components/button/Button";

function produtoFiltro(produto: Produto, filtro: FiltroState) {
  // cria funcao
  if (filtro.tipo && produto.tipo !== filtro.tipo) return false; // se algum filtro for selecionado (e nao esta vazio) e o tipo de produto e diferente do filtro, retorna falso
  if (filtro.aroma && !produto.aroma.includes(filtro.aroma)) return false; // se algum aroma for selecionado e o aroma do produto nao inclui o aroma do filtro > falso
  const precoProduto = Number(produto.price.replace(",", "."));
  return precoProduto <= filtro.precoMax; // mostrar se o preço do produto for até o valor selecionado
}

interface Produto {
  title: string;
  aroma: string[];
  tipo: string;
  price: string;
  img: string;
  promocao?: string;
}

interface FiltroState {
  aroma: string;
  tipo: string;
  precoMax: number;
}

export default function Catalogo() {
  const produtos = [
    {
      title: "Vela Brotinho de Bambu",
      aroma: ["fresco"],
      tipo: "classicas",
      price: "30,00",
      img: "/imagens/velabrotinhodebambu.jpg",
    },
    {
      title: "Vela Baunilha",
      aroma: ["doce"],
      tipo: "classicas",
      price: "30,00",
      img: "/imagens/velabaunilha.jpeg",
    },
    {
      title: "Vela Lavanda",
      aroma: ["floral"],
      tipo: "classicas",
      price: "50,00",
      img: "/imagens/velalavanda.jpg",
    },
    {
      title: "Vela Limão Siciliano",
      aroma: ["citrico"],
      tipo: "classicas",
      price: "50,00",
      img: "/imagens/velalimaosiciliano.jpg",
    },
    {
      title: "Vela Lírio Verde",
      aroma: ["floral"],
      tipo: "classicas",
      price: "50,00",
      img: "/imagens/velalirioverde.jpeg",
    },
    {
      title: "Vela Maçã e Canela",
      aroma: ["doce"],
      tipo: "classicas",
      price: "50,00",
      img: "/imagens/velamacaecanela.jpg",
    },
    {
      title: "Vela Pitanguinha",
      aroma: ["frutada"],
      tipo: "classicas",
      price: "50,00",
      img: "/imagens/velapitanguinha.jpeg",
    },
    {
      title: "Vela 150ML - Personalizada",
      aroma: ["floral", "citrico", "fresco", "frutado", "doce"],
      tipo: "personalizadas",
      price: "50,00",
      img: "/imagens/vela150ml.jpg",
    },
    {
      title: "Vela na Latinha - Personalizada",
      aroma: ["floral", "citrico", "fresco", "frutado", "doce"],
      tipo: "personalizadas",
      price: "50,00",
      img: "/imagens/velalata.jpeg",
    },
    {
      title: "Vela Bubble",
      aroma: ["floral", "citrico", "fresco", "frutado", "doce"],
      tipo: "especiais",
      price: "50,00",
      img: "/imagens/velabubble.jpg",
    },
    {
      title: "Vela Especial - Namorados",
      aroma: ["doce"],
      tipo: "especiais",
      price: "50,00",
      img: "/imagens/velanamorados.jpg",
    },
    {
      title: "Vela Especial - Dia das Mães",
      aroma: ["doce"],
      tipo: "especiais",
      price: "50,00",
      img: "/imagens/veladiadasmaes.jpg",
    },
    {
      title: "Vela Especial - Natal",
      aroma: ["floral"],
      tipo: "especiais",
      price: "50,00",
      img: "/imagens/velanatal.jpg",
    },
    {
      title: "Vela Média - Personalizada",
      aroma: ["floral", "citrico", "fresco", "frutado", "doce"],
      tipo: "personalizadas",
      price: "50,00",
      img: "/imagens/velamedia.jpeg",
    },
  ];

  const [filtro, setFiltro] = useState({
    aroma: "",
    tipo: "",
    precoMax: 100,
  });
  const [showFiltroModal, setShowFiltroModal] = useState(false);

  return (
    <>
      <Header />
      <h2 className={`${styles["subtitulo"]}`} id="catalogo">
        Nosso Catalógo
        <Button
          className={styles.filtroButton}
          type="button"
          onClick={() => setShowFiltroModal(true)}
        >
          <FaFilter />
        </Button>
      </h2>
      <p className={`${styles["texto"]}`}>Descubra nossos aromas</p>
      <div className={styles.divCatalogo}>
        <div className={styles.filtroDesktop}>
          <Filtro
            onFiltroChange={setFiltro}
            filtro={filtro}
            onLimpar={() => setFiltro({ aroma: "", tipo: "", precoMax: 100 })}
          />
        </div>
        <div className={styles.cardVendas}>
          {produtos
            .filter((p) => produtoFiltro(p, filtro))
            .map((produto) => (
              <CardVenda
                key={produto.title}
                icon={<MdOutlineShoppingCart />}
                label="Compre agora"
                title={produto.title}
                price={produto.price}
                img={produto.img}
              />
            ))}
        </div>
      </div>

      {/* Modal para abertura do filtro no mobile */}
      {showFiltroModal && (
        <div
          className={styles.modalOverlay}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setShowFiltroModal(false);
            }
          }}
        >
          <div
            className={styles.modalContent}
            onClick={(event) => event.stopPropagation()}
          >
            <Button
              type="button"
              className={styles.modalClose}
              onClick={() => setShowFiltroModal(false)}
            >
              Fechar
            </Button>
            <Filtro
              onFiltroChange={setFiltro}
              filtro={filtro}
              onLimpar={() => setFiltro({ aroma: "", tipo: "", precoMax: 100 })}
            />
          </div>
        </div>
      )}

      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
