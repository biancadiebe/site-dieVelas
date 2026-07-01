"use client";
import styles from "./header.module.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

//icons: https://react-icons.github.io/react-icons/search/#q=search

export default function Header() {
  const [menuMobile, setMobile] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <button
          className={styles.botaoMobile}
          onClick={() => setMobile(!menuMobile)}
        >
          ☰
        </button>

        <h1 className={styles.logo}>DiêVelas</h1>
        <nav className={styles.nav}>
          <a href="#inicio">Início</a>
          <a href="#catalogo">Produtos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contact">Contato</a>
        </nav>
        <div className={styles.icons}>
          <IoIosSearch />
          <MdOutlineShoppingCart />
        </div>

        <nav
          className={`${styles.navMobile} ${menuMobile ? styles.navMobileAberto : ""}`}
        >
          <div className={styles.menuMobile}>
            <h1 className={styles.subtitulo}>DiêVelas</h1>
            <button //Altera o estado para sair do menu "hamburguer" do mobile
              className={styles.botaoFechar}
              onClick={() => setMobile(false)}
            >
              <AiOutlineClose />
            </button>
          </div>

          <a href="#inicio">Início</a>
          <a href="#catalogo">Produtos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contact">Contato</a>
        </nav>
      </header>
    </>
  );
}
