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

      <h1>WE ARE CO-HOSTING THE NEXT SHOW!!!</h1>
      <h2>CVGPC Show #2 </h2>

      <a
        className={styles.link}
        href="https://docs.google.com/spreadsheets/d/1IVxUoQHW6ubHl9XigZAjDt-Imnn1JuaZIZJDGJdOrVQ/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>Lots of Volunteers Needed</h3>
      </a>
      <br />

      <p className={styles.description}>Where: Johansen High School</p>
      <p className={styles.description}>When: Saturday, February 25th</p>
      <p className={styles.description}>Time: 8am-7pm ALL DAY EVENT</p>
      <p className={styles.finePrint}>
        * We will update times once the schdule for show 2 is posted
      </p>

      <hr />

      <h3>
        Part of hosting is supplying a hospitality room for the judges and
        coaches
      </h3>
      <h3>This year we will be prividing breakfast, a taco bar for lunch.</h3>
      <a
        className={styles.link}
        href="https://docs.google.com/spreadsheets/d/1IVxUoQHW6ubHl9XigZAjDt-Imnn1JuaZIZJDGJdOrVQ/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here for items needed and a signup sheet
      </a>

      <hr />

      <h2>
        Any questions- text Neil Holcomb @ <a href="tel:2093410269"></a>
        (209)341-0269
      </h2>

      <h1>
        🤩A Big thank you to the volunteers who made last year’s shows such a
        success!
      </h1>
    </main>
  );
}
