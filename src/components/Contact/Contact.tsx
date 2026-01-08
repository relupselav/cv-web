import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contacto" className={styles.contact}>
      <h2>Contacto</h2>

      <div className={styles.links}>
        <p>vmsnspuler@gmail.com</p>
        <a href="https://www.linkedin.com/in/valentina-spuler-anabalon/" target="_blank">
          LinkedIn
        </a>
      </div>
    </section>
  );
}