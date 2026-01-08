import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="sobre-mi" className={styles.section}>
    
      <img
        src="/vectors/hero-lines.svg"
        alt=""
        aria-hidden="true"
        className={styles.titleLines}
      />
   
    <div className={styles.content}>
        
   <h1 className={styles.title}>VALENTINA SPULER</h1>
        <div className={styles.card}>
          <p className={styles.description}>
 Desarrolladora con foco en front-end y diseño digital. Experiencia en entornos corporativos y trabajo con equipos ágiles.
          </p>

          <img
            src="/img/mimi.png"
            alt="Mimi"
            className={styles.cat}
          />
        </div>

      </div>
    </section>
  );
}
