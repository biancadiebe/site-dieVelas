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
import { produtos } from "@/src/data/velas";
import { useSearchParams } from "next/navigation";
import { precoMinimoPersonalizado } from "@/src/data/valores";
import { Suspense } from "react";

function precoNumericoDoCard(produto: Produto) {
  return Number(
    precoMinimoPersonalizado(produto.id, produto.price)
      .replace(/\./g, "")
      .replace(",", "."),
  );
}

function produtoFiltro(produto: Produto, filtro: FiltroState) {
  // cria funcao
  if (filtro.tipo && produto.tipo !== filtro.tipo) return false; // se algum filtro for selecionado (e nao esta vazio) e o tipo de produto e diferente do filtro, retorna falso
  if (filtro.aroma && !produto.aroma.includes(filtro.aroma)) return false; // se algum aroma for selecionado e o aroma do produto nao inclui o aroma do filtro > falso
  const precoProduto = precoNumericoDoCard(produto);
  return precoProduto <= filtro.precoMax; // mostrar se o preço do produto for até o valor selecionado
}

interface Produto {
  id: string;
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

function CatalogoConteudo() {
  const searchParams = useSearchParams();
  const busca = searchParams.get("busca")?.trim().toLowerCase() ?? "";
  const [filtro, setFiltro] = useState({
    aroma: "",
    tipo: "",
    precoMax: 100,
  });
  const [showFiltroModal, setShowFiltroModal] = useState(false);
  const produtosFiltrados = produtos.filter((produto) => {
    const correspondeBusca =
      !busca ||
      produto.title.toLowerCase().includes(busca) ||
      produto.aroma.some((aroma) => aroma.toLowerCase().includes(busca)) ||
      produto.velasDisponiveis?.some((vela) =>
        vela.toLowerCase().includes(busca),
      );

    return correspondeBusca && produtoFiltro(produto, filtro);
  });

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
          {produtosFiltrados.length === 0 ? (
            <div className={styles.produtoNaoEncontrado}>
              <h2>Produto não encontrado</h2>
              <p>Não encontramos nenhuma vela com esse nome ou aroma.</p>
            </div>
          ) : (
            produtosFiltrados.map((produto) =>
              (() => {
                const precoCard = precoMinimoPersonalizado(
                  produto.id,
                  produto.price,
                );

                return (
                  <CardVenda
                    key={produto.id}
                    id={produto.id}
                    icon={<MdOutlineShoppingCart />}
                    label="Compre agora"
                    title={produto.title}
                    price={precoCard}
                    img={produto.img}
                  />
                );
              })(),
            )
          )}
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

export default function Catalogo() {
  return (
    <Suspense fallback={<div>Carregando catálogo...</div>}>
      <CatalogoConteudo />
    </Suspense>
  );
}
