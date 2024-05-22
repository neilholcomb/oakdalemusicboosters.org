import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Oakdale Music Boosters</h1>
      <div className={styles.center}>
        <a
          href="https://www.facebook.com/groups/OMBoosters/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Image
            className={styles.logo}
            src="/logo.jpg"
            alt="Oakdale Music Bosters Logo"
            width={500}
            height={261}
            priority
          /> */}
          <Image
            className={styles.logo}
            src="/fireworks-stand.jpeg"
            alt="Firework Stand"
            width={640}
            height={480}
            priority
          />
        </a>
      </div>
      <h3>
        <p className={styles.paddedTop}>
          Its that time of year again, our primary fundraiser is here!
        </p>
        <p className={styles.paddedTop}>
          Each year we operate the most successful fireworks stand in Oakdale,
          raising funds to support music students in OJUSD schools.
        </p>
        <p className={styles.paddedTop}>
          If you can spare some time please sign up to help us run the booth,
          you will never be alone, an experienced volunteer is guaranteed to be
          there every day from open to close.
        </p>
        <p className={styles.paddedTop}>
          Its a lot of fun, for a worthwhile cause, your kids!
        </p>
      </h3>

      <a
        href="https://www.signupgenius.com/go/10C094EA4AB23A5F8C43-49804973-fireworks#/ "
        target="_blank"
        className={styles.signupLink}
        rel="noopener noreferrer"
      >
        Click here to sign up to help us out!
      </a>

      <p>Follow us on FaceBook for the latest updates!</p>
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
        />
      </a>
    </main>
  );
}
