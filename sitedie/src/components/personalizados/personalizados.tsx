import Image from "next/image";
import styles from "./personalizados.module.css";

export function Personalizados() {
  return (
    <section className={styles.secaoPersonalizados}>
      <div className={styles.cardPreview}>
        <div className={styles.wrapperImagem}>
          <Image
            src="/imagens/velabubble.jpg"
            alt="Vela Bubble personalizada"
            fill
            className={styles.imagem}
          />
        </div>
      </div>

      <div className={styles.conteudo}>
        <h2 className={styles.titulo}>Velas Personalizadas</h2>
        <p className={styles.texto}>
          Também trabalhamos com kits personalizados! Criamos embalagens e
          aromas exclusivos para deixar suas comemorações, lembrancinhas ou até
          mesmo o seu negócio ainda mais especiais. Entre em contato para saber mais informações.
        </p>

        <div className={styles.etapas}>
          <div className={styles.etapa}>
            <div className={styles.numeroEtapa}>01</div>
            <div>
              <h3 className={styles.tituloEtapa}>Escolha o aroma</h3>
              <p className={styles.descricaoEtapa}>
                Selecione entre nossas fragrâncias ou descreva a combinação que
                imagina.
              </p>
            </div>
          </div>

          <div className={styles.etapa}>
            <div className={styles.numeroEtapa}>02</div>
            <div>
              <h3 className={styles.tituloEtapa}>Defina os detalhes</h3>
              <p className={styles.descricaoEtapa}>
                Tamanho, embalagem e etiqueta, personalizado da forma que você precisa.
              </p>
            </div>
          </div>

          <div className={styles.etapa}>
            <div className={styles.numeroEtapa}>03</div>
            <div>
              <h3 className={styles.tituloEtapa}>Fale com a gente</h3>
              <p className={styles.descricaoEtapa}>
                Entre em contato para finalizarmos seu pedido.
              </p>
            </div>
          </div>
        </div>

        <button className={styles.botao} type="button">
          Fazer um pedido
        </button>
      </div>
    </section>
  );
}
