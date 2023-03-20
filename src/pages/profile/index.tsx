import TheNavbar from "@/components/TheNavbar";
import styles from "./profile.module.scss";

export default function profilePage() {
  return (
    <div className={styles.main}>
      <TheNavbar></TheNavbar>

      <section className={`${styles.hero} ${styles.container}`}>
        <div className={styles.left}>
          <h2>
            Hello, I am George! <br />
          </h2>
        </div>
        <div className={styles.right}>this is some interactive animation</div>
      </section>
      <section className={`${styles.container}`}>about</section>
      <section className={`${styles.container}`}>experience</section>
      <section className={`${styles.container}`}>teck stack</section>
      <section className={`${styles.container}`}>contact</section>
    </div>
  );
}
