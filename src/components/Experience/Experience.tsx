import styles from "./Experience.module.css";
import Image from "next/image";

export default function Experience() {
  return (
     <section id="experiencia" className={styles.section}>
       <img
          src="/vectors/experience-waves.svg"
          alt=""
          className={styles.rightLines}
        />
      <div className={styles.container}>
        <h2 className={styles.title}>Experiencia</h2>
           {/* <img
          src="/vectors/hero-wave.svg"
          alt=""
          className={styles.rightLines}
        /> */}


        <div className={styles.list}>

          <div className={styles.item}>
            <p className={styles.date}>Sept. 2018 - Sept. 2021</p>
            <p className={styles.role}>
              Banco Interamericano de Desarrollo
            </p>
          </div>

          <div className={styles.item}>
            <p className={styles.date}>Oct. 2017 - Ago. 2018</p>
            <p className={styles.role}>Everis Chile</p>
          </div>
        </div>

       

        <img
          src="/vectors/experience-arrows.svg"
          alt=""
          className={styles.arrows}
        />
      </div>
    </section>
  );
}