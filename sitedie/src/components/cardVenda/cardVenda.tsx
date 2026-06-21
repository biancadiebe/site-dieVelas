import styles from './cardVenda.module.css';
import Image from 'next/image'


interface CardProps {
    icon: React.ReactNode; //para aceitar o react-icons
    title: string;
    label: string;
    price: string;
    img: string;
}

export function CardVenda({ icon, label, title, price, img }: CardProps) {
    return (
        <div className={styles.cardVenda}>

            <div className={styles.imageWrapper}>
                <Image src={img} alt="Vela" fill className={styles.img} />
            </div>

            <div className={styles.infos}>
                <h1 className={styles.title}>{title}</h1>

                <p className={styles.label}>{label}</p>

                <div className={styles.preco}>
                    <p className={styles.price}>R$ {price}</p>
                    <div className={styles.iconWrapper}>
                        {icon}
                    </div>
                </div>
            </div>

        </div>
    );
}