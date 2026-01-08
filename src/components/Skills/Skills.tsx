import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="aptitudes" className={styles.skills}>
      <h2>Aptitudes</h2>

      <div className={styles.skillsGraph}>
        
        <p>Figma</p>
        <p>UI/IX</p>
        <p>Design Systems</p>
        <p>HTML/CSS</p>
      </div>
    </section>
  );
}