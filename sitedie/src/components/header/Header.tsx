"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { FormEvent } from "react";

//icons: https://react-icons.github.io/react-icons/search/#q=search

export default function Header() {
  const pathname = usePathname();
  const [menuMobile, setMobile] = useState(false);
  const [busca, setBusca] = useState("");
  const isHome = pathname === "/";

  const pesquisar = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const termo = busca.trim();
    window.location.href = termo
      ? `/catalogo?busca=${encodeURIComponent(termo)}`
      : "/catalogo";
  };

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
          <Link href="/catalogo">Produtos</Link>
          <Link href={isHome ? "#sobre" : "/#sobre"}>Sobre</Link>
          <Link href={isHome ? "#personalizados" : "/#personalizados"}>
            Personalizados
          </Link>
          <Link href="#footer">Contato</Link>
        </nav>
        <form className={styles.busca} onSubmit={pesquisar}>
          <input
            type="search"
            value={busca}
            onChange={(event) => setBusca(event.target.value)}
            placeholder="Buscar vela"
            aria-label="Buscar vela"
          />
          <button type="submit" aria-label="Pesquisar">
            <IoIosSearch className={styles.icons} />
          </button>
        </form>
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
            <Link href="/catalogo" onClick={() => setMobile(false)}>
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
