"use client";
import styles from "./Filtro.module.css";
import Button from "../button/Button";

interface FiltroProps {
  filtro: {
    aroma: string;
    tipo: string;
    precoMax: number;
  };
  onFiltroChange: (filtro: {
    aroma: string;
    tipo: string;
    precoMax: number;
  }) => void;
  onLimpar: () => void;
}

export default function Filtro({
  filtro,
  onFiltroChange,
  onLimpar,
}: FiltroProps) {
  return (
    <>
      <div className={styles.divFiltro}>
        <h2 className={styles.tituloFiltro}>Filtros</h2>
        <h3 className={styles.subtituloFiltro}>TIPOS DE VELA</h3>
        <ul className={styles.opcoesFiltro}>
          <li onClick={() => onFiltroChange({ ...filtro, tipo: "classicas" })}>
            Clássicas
          </li>
          <li onClick={() => onFiltroChange({ ...filtro, tipo: "especiais" })}>
            Especiais
          </li>
          <li
            onClick={() =>
              onFiltroChange({ ...filtro, tipo: "personalizadas" })
            }
          >
            Personalizadas
          </li>
        </ul>
        <hr className={styles.divisor} />

        <h3 className={styles.subtituloFiltro}>AROMA</h3>
        <ul className={styles.opcoesFiltro}>
          <li onClick={() => onFiltroChange({ ...filtro, aroma: "floral" })}>
            Floral
          </li>
          <li onClick={() => onFiltroChange({ ...filtro, aroma: "citrico" })}>
            Cítrico
          </li>
          <li onClick={() => onFiltroChange({ ...filtro, aroma: "fresco" })}>
            Fresco
          </li>
          <li onClick={() => onFiltroChange({ ...filtro, aroma: "frutado" })}>
            Frutado
          </li>
          <li onClick={() => onFiltroChange({ ...filtro, aroma: "doce" })}>
            Doce
          </li>
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
              value={filtro.precoMax}
              onChange={(e) =>
                onFiltroChange({ ...filtro, precoMax: Number(e.target.value) })
              }
              className={styles.precoInput}
              min={0}
              max={500}
            />
          </span>
        </div>

        {/* Slider separado, largura total */}
        <input
          type="range"
          min={0}
          max={500}
          value={filtro.precoMax}
          onChange={(e) =>
            onFiltroChange({ ...filtro, precoMax: Number(e.target.value) })
          }
          className={styles.slider}
        />

        {/* Labels embaixo */}
        <div className={styles.precoLabels}>
          <span>R$ 0</span>
          <span>R$ {filtro.precoMax}</span>
        </div>

        <button onClick={onLimpar} className={styles.limpaFiltro}>
          Limpar Filtros
        </button>
      </div>
    </>
  );
}
