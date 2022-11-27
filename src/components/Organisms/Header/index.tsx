import Link from "next/link";
import styles from "./style.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/restaurants" className={styles.link}>
        <div className={`${styles.button} ${styles.buttonRestaurants}`}>
          <p>MESICを使う</p>
        </div>
      </Link>
      <Link href="/about" className={styles.link}>
        <div className={`${styles.button} ${styles.buttonAbout}`}>
          <p>MESICについて</p>
        </div>
      </Link>
    </div>
  );
};
