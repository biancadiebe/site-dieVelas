import styles from "./cardVenda.module.css";
import Image from "next/image";

interface CardProps {
  icon: React.ReactNode; //para aceitar o react-icons
  title: string;
  label: string;
  price: string;
  img: string;
  favorito?: React.ReactNode;
  promocao?: string;
}

export function CardVenda({
  icon,
  label,
  title,
  price,
  img,
  favorito,
  promocao,
}: CardProps) {
  return (
    <div className={styles.cardVenda}>
      <div className={styles.imageWrapper}>
        <Image src={img} alt="Vela" fill className={styles.img} />
        {favorito && <div className={styles.favorito}>{favorito}</div>}

        {promocao && <div className={styles.promocao}>{promocao}</div>}
      </div>

      <div className={styles.infos}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.label}>{label}</p>

        <div className={styles.preco}>
          <p className={styles.price}>R$ {price}</p>
          <div className={styles.iconWrapper}>{icon}</div>
        </div>
      </div>
    </div>
  );
}
