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

      <h1>Oakdale Music Boosters</h1>

      <a
        className={styles.link}
        href="https://www.facebook.com/groups/OMBoosters/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={styles.logo}
          src="/fb_icon_325x325.png"
          alt="Follow us on FaceBook"
          width={75}
          height={75}
          unoptimized
        />
      </a>
    </main>
  );
}
