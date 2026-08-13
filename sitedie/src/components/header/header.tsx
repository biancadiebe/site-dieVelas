"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

//icons: https://react-icons.github.io/react-icons/search/#q=search

export default function Header() {
  const pathname = usePathname();
  const [menuMobile, setMobile] = useState(false);
  const isHome = pathname === "/";

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
          <Link href={isHome ? "#inicio" : "/#inicio"}>Início</Link>
          <Link href="#catalogo">Produtos</Link>
          <Link href={isHome ? "#sobre" : "/#sobre"}>Sobre</Link>
          <Link href={isHome ? "#personalizados" : "/#personalizados"}>
            Personalizados
          </Link>
          <Link href="#footer">Contato</Link>
        </nav>
        <div className={styles.icons}>
          <IoIosSearch />
        </div>
        <nav
          className={`${styles.navMobile} ${menuMobile ? styles.navMobileAberto : ""}`}
        >
          <div className={styles.menuMobile}>
            <h1 className={styles.subtitulo}>DiêVelas</h1>
            <button
              className={styles.botaoFechar}
              onClick={() => setMobile(false)}
            >
              <AiOutlineClose />
            </button>
          </div>

          <div className={styles.linksMobile}>
            <Link
              href={isHome ? "#inicio" : "/#inicio"}
              onClick={() => setMobile(false)}
            >
              Início
            </Link>
            <Link href="#catalogo" onClick={() => setMobile(false)}>
              Produtos
            </Link>
            <Link
              href={isHome ? "#sobre" : "/#sobre"}
              onClick={() => setMobile(false)}
            >
              Sobre
            </Link>
            <Link
              href={isHome ? "#personalizados" : "/#personalizados"}
              onClick={() => setMobile(false)}
            >
              Personalizados
            </Link>
            <Link href="#footer" onClick={() => setMobile(false)}>
              Contato
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
