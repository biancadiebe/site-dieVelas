import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { TbBrandShopee } from "react-icons/tb";
import { SiMercadopago } from "react-icons/si";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.colunaDesc}>
          <div className={styles.logo}>
            <span>DiêVelas</span>
          </div>
          <p className={styles.descricao}>
            Velas artesanais que iluminam e perfumam sua vida
          </p>
          <div className={styles.icon}>
            <FaInstagram />
            <TbBrandShopee />
            <SiMercadopago />
          </div>
        </div>

        <div className={styles.colunaNav}>
          <h3 className={styles.titulo}>Navegação</h3>
          <a href="#inicio">Início</a>
          <a href="#catalogo">Produtos</a>
          <a href="#sobre">Sobre</a>
          <a href="#">Contato</a>
          <a href="#">Trocas e Devoluções</a>
        </div>

        <div className={styles.colunaCont}>
          <h3 className={styles.titulo}>Contato</h3>
          <p>contato@dievelas.com</p>
          <p>(11) 9999-9999</p>
          <p>São Paulo, Brasil</p>
        </div>
      </div>

      <div className={styles.divisor} />

      <p className={styles.copyright}>
        © 2026 DiêVelas. Todos os direitos reservados.
      </p>
    </footer>
  );
}
