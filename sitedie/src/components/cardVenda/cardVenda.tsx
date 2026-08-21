import styles from "./CardVenda.module.css";
import Image from "next/image";
import Link from "next/link";

export interface CardProps {
  icon: React.ReactNode; //para aceitar o react-icons
  title: string;
  label: string;
  price: string;
  img: string;
  tipo?: string;
  promocao?: string;
  imgs?: string[]; //imagens na pagina do Item
  id?: string; //ID para rota dinâmica
}

export function CardVenda({
  label,
  title,
  price,
  img,
  promocao,
  id,
}: CardProps) {
  return (
    <Link href={id ? `/catalogo/${id}` : "#"} className={styles.linkCard}>
      <div className={styles.cardVenda}>
        <div className={styles.imageWrapper}>
          <Image src={img} alt="Vela" fill className={styles.img} />

          {promocao && <div className={styles.promocao}>{promocao}</div>}
        </div>

        <div className={styles.infos}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.label}>{label}</p>

          <div className={styles.preco}>
            <p className={styles.price}>R$ {price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
