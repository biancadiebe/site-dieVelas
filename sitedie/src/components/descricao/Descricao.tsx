"use client";

import styles from "./Descricao.module.css";
import Image from "next/image";
import { CardProps, CardVenda } from "../cardVenda/CardVenda";
import { MdArrowForwardIos } from "react-icons/md";
import { FaLongArrowAltRight, FaWhatsapp } from "react-icons/fa";
import Header from "../header/Header";
import { Footer } from "../footer/Footer";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/dist/client/link";
import { produtos } from "@/src/data/velas";
import {
  valoresPersonalizadosGrande,
  valoresPersonalizadosLatinha,
  valoresPersonalizadosMedia,
} from "@/src/data/valores";

const tipos = [
  { id: "grande", label: "Grande", preco: "45,00" },
  { id: "media", label: "Média", preco: "18,00" },
  { id: "latinha", label: "Latinha", preco: "6,00" },
];

const aromasDisponiveis = Array.from(
  new Set(produtos.flatMap((produto) => produto.velasDisponiveis)),
);

export default function Descricao({
  label,
  title,
  price,
  img,
  imgs,
  tipo,
  id,
}: CardProps) {
  const valoresPersonalizados =
    id === "7"
      ? valoresPersonalizadosGrande
      : id === "13"
        ? valoresPersonalizadosMedia
        : valoresPersonalizadosLatinha;
  const opcoes = tipo === "personalizadas" ? valoresPersonalizados : tipos;
  const temVariacoes = imgs?.length === 2; //verifica se o item tem + de uma variacao
  const temOpcoes = temVariacoes || tipo === "personalizadas";
  const opcaoInicial =
    tipo === "personalizadas"
      ? (opcoes.find((opcao) => opcao.label === "50")?.id ?? opcoes[0]?.id)
      : "grande";
  const [tipoSelecionado, setTipoSelecionado] = useState(opcaoInicial ?? ""); //guarda o tamanho que está ativo no momento
  const [aromaSelecionado, setAromaSelecionado] = useState("");
  const [imagensVariacoes, setImagensVariacoes] = useState(
    temVariacoes ? [img, imgs![1], imgs![0]] : [],
  );
  const [produtosSugeridos, setProdutosSugeridos] = useState<typeof produtos>(
    [],
  );

  useEffect(() => {
    const disponiveis = produtos.filter((produto) => produto.id !== id);
    const randomizados = [...disponiveis]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    setProdutosSugeridos(randomizados);
  }, [id]);

  const tipoIndex = opcoes.findIndex((opcao) => opcao.id === tipoSelecionado);
  const opcaoSelecionada = opcoes[tipoIndex];
  const precoSelecionado =
    (tipo === "personalizadas" || temVariacoes) && opcaoSelecionada
      ? opcaoSelecionada.preco
      : price; //guarda o preço conforme o tamanho escolhido

  //quando clica nos botões, muda o tamanho, a imagem principal e o preço na pagina
  const selecionarTipo = (index: number) => {
    if (!temOpcoes) return;

    setTipoSelecionado(opcoes[index].id);
  };

  //muda a imagem quando clica na miniatura
  const trocarImagem = (index: number) => {
    if (!temVariacoes) return;

    const tipoClicado = imagensVariacoes.findIndex(
      (imagem) =>
        imagem === imagensVariacoes.filter((_, i) => i !== tipoIndex)[index],
    );

    if (tipoClicado !== -1) selecionarTipo(tipoClicado);
  };

  return (
    <>
      <Header />
      <div className={styles.divDescricao}>
        <div className={styles.textoInicial}>
          <p className={styles.tituloCatalogo}>Catálogo</p>
          <MdArrowForwardIos />
          <span className={styles.tituloCatalogo}>{title}</span>
          <Link href="/catalogo" className={styles["link-voltar-ao-catalogo"]}>
            <FaLongArrowAltRight /> Voltar ao catálogo
          </Link>
        </div>

        <div className={styles.divProduto}>
          <div className={styles.imgs}>
            <div className={styles.imagemPrincipal}>
              <Image
                src={imagensVariacoes[tipoIndex] ?? img}
                alt="Vela"
                fill
                className={styles.img}
              />
            </div>

            <div className={styles.imagensSecundarias}>
              {imagensVariacoes
                .filter((_, index) => index !== tipoIndex)
                .map((miniatura, index) => (
                  <button
                    type="button"
                    key={miniatura}
                    className={styles.imagemSecundaria}
                    aria-label={`Exibir imagem ${index + 2} de ${title}`}
                    onClick={() => trocarImagem(index)}
                  >
                    <Image
                      src={miniatura}
                      alt="Vela"
                      fill
                      className={styles.img}
                    />
                  </button>
                ))}
            </div>
          </div>

          <div className={styles.descricaoItem}>
            <h1 className={styles.titulo}>{title}</h1>
            <h2 className={styles.preco}>R$ {precoSelecionado}</h2>

            <hr className={styles.hr} />

            <div className={styles.tiposdeVelas}>
              {temOpcoes &&
                opcoes.map((opcao, index) => (
                  <button
                    type="button"
                    key={opcao.id}
                    className={`${styles.cardTipo} ${
                      tipoSelecionado === opcao.id ? styles.ativo : ""
                    }`}
                    onClick={() => selecionarTipo(index)}
                  >
                    <p className={styles.labelTipo}>{opcao.label}</p>
                  </button>
                ))}
            </div>

            {tipo === "personalizadas" ||
              (id === "9" && (
                <label className={styles.seletorAroma}>
                  Aroma
                  <select
                    value={aromaSelecionado}
                    onChange={(event) =>
                      setAromaSelecionado(event.target.value)
                    }
                    className={styles.inputAroma}
                  >
                    <option value="">Selecione um aroma</option>
                    {aromasDisponiveis.map((velasDisponiveis) => (
                      <option key={velasDisponiveis} value={velasDisponiveis}>
                        {velasDisponiveis}
                      </option>
                    ))}
                  </select>
                </label>
              ))}

            <p className={styles.titutloDescricao}>DESCRIÇÃO</p>
            <p className={styles.label}>{label}</p>
            <button className={styles.botaoEncomendar}>
              Encomendar pelo WhatsApp
              <FaWhatsapp className={styles.iconWhatsapp} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.catalogoInferior}>
        <div className={styles.textoCatalogoInferior}>
          <h3 className={styles.tituloCatalogoInferior}>
            Você também pode gostar
          </h3>
        </div>
        <div className={styles.cardsInferiores}>
          {produtosSugeridos.map((produto) => (
            <CardVenda
              key={produto.id}
              id={produto.id}
              icon={undefined}
              title={produto.title}
              label={produto.aroma.join(", ")}
              price={produto.price}
              img={produto.img}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
