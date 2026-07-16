import styles from "./card.module.css";

interface CardProps {
  icon: React.ReactNode; // para aceitar o react-icons
  title: string;
  description: string;
  variant?: "default" | "accent";
}

export function Card({
  icon,
  title,
  description,
  variant = "default",
}: CardProps) {
  return (
    <div
      className={`${styles.card} ${variant === "accent" ? styles.cardAccent : ""}`}
    >
      <div className={styles.iconWrapper}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
