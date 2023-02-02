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
    </main>
  );
}
