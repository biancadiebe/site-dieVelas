import styles from './header.module.css';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

//icons: https://react-icons.github.io/react-icons/search/#q=search 

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>DiêVelas</h1>

      <nav className={styles.nav}>
        <a href="#home">Início</a>
        <a href="#products">Produtos</a>
        <a href="#about">Sobre</a>
        <a href="#contact">Contato</a>
      </nav>

      <div className={styles.icons}>
        <IoIosSearch/>
        <MdOutlineShoppingCart/>
      </div>
    </header>
  );
}