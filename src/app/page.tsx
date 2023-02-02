import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <a
          href="https://www.facebook.com/groups/OMBoosters/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.logo}
            src="/logo.jpg"
            alt="Oakdale Music Bosters Logo"
            width={500}
            height={261}
            priority
          />
        </a>
      </div>
      <h3 className={styles.title}>CVGPC Show #2 Volunteer sign up&apos;s</h3>
      <a
        className={styles.link}
        href="https://docs.google.com/spreadsheets/d/1IVxUoQHW6ubHl9XigZAjDt-Imnn1JuaZIZJDGJdOrVQ/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sign up to volunteer
      </a>
      <br />
      <a
        className={styles.link}
        href="https://docs.google.com/spreadsheets/d/1IVxUoQHW6ubHl9XigZAjDt-Imnn1JuaZIZJDGJdOrVQ/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bring food for hospitality room
      </a>
    </main>
  );
}
