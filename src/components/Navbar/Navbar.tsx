import styles from "./Navbar.module.css";
import Link from 'next/link';

export default function Navbar() {
  return (
 <nav className={styles.navbar}>
      {/* <div className={styles.logo}>VS</div> */}

      <ul className={styles.menu}>
   <li><Link href="#about">Sobre mi</Link></li>
        <li><Link href="#experience">Experiencia</Link></li>
        <li><Link href="#skills">Aptitudes</Link></li>
        <li><Link href="#contact">Contacto</Link></li>
      </ul>
    </nav>
  );
}