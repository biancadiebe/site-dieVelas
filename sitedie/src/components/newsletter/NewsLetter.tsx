import styles from "./NewsLetter.module.css";

export function NewsLetter() {
  return (
    <div className={styles.newsletter}>
      <h2 className={styles.titulo}>Receba novidades e ofertas</h2>
      <h3 className={styles.subtitulo}>Inscreva-se em nosso newsletter</h3>

      <input
        type="email"
        placeholder="Seu e-mail..."
        className={styles.input}
      ></input>

      <button className={styles.botao}>Se inscrever</button>
    </div>
  );
}
