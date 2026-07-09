"use client";
import { useState } from "react";
import styles from "./filtro.module.css";
import { CardVenda } from "../cardVenda/cardVenda";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";

export default function Filtro() {
  const [precoMax, setPrecoMax] = useState(65);
  return (
    <>
      <div className={styles.divFiltro}>
        <h2 className={styles.tituloFiltro}>Filtros</h2>
        <h3 className={styles.subtituloFiltro}>TIPOS DE VELA</h3>
        <ul className={styles.opcoesFiltro}>
          <li>Pote de Vidro 150ML</li>
          <li>Pote de Vidro 100ML</li>
          <li>Vela na Latinha</li>
          <li>Velas Personalizadas</li>
        </ul>
        <hr className={styles.divisor} />

        <h3 className={styles.subtituloFiltro}>AROMA</h3>
        <ul className={styles.opcoesFiltro}>
          <li>Floral</li>
          <li>Amadeirado</li>
          <li>Cítrico</li>
          <li>Fresco</li>
          <li>Frutado</li>
        </ul>
        <hr className={styles.divisor} />

        <h3 className={styles.subtituloFiltro}>PREÇO</h3>

        {/* Linha de cima: R$ 0 e até R$ [input] */}
        <div className={styles.preco}>
          <span>R$ 0</span>
          <span>
            até R$
            <input
              type="number"
              value={precoMax}
              onChange={(e) => setPrecoMax(Number(e.target.value))}
              className={styles.precoInput}
              min={0}
              max={200}
            />
          </span>
        </div>

        {/* Slider separado, largura total */}
        <input
          type="range"
          min={0}
          max={200}
          value={precoMax}
          onChange={(e) => setPrecoMax(Number(e.target.value))}
          className={styles.slider}
        />

        {/* Labels embaixo */}
        <div className={styles.precoLabels}>
          <span>R$ 0</span>
          <span>R$ {precoMax}</span>
        </div>
      </div>
    </>
  );
}
