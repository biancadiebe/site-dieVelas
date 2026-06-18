import styles from './card.module.css';

interface CardProps {
    icon: React.ReactNode; //para aceitar o react-icons
    label: string;
}

export function Card({ icon, label }: CardProps) {
    return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <p className={styles.label}>{label}</p>
    </div>
    );
}
