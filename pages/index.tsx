import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const whatAreWeDoingOptions = [
    <p className={styles.whatWeAreDoing}>
      are finally done putting off the inevitable and
      <br />
      are getting married at
    </p>,
    <p className={styles.whatWeAreDoing}>
      are forcing their cats to tolerate each other
      <br />
      much longer than either would like
    </p>,
    <p className={styles.whatWeAreDoing}>
      are asking each other "What do you want for dinner?"
      <br />
      back and forth forever
    </p>,
  ];
  const whatAreWeDoing =
    whatAreWeDoingOptions[
      Math.floor(Math.random() * whatAreWeDoingOptions.length)
    ];

  return (
    <div className={styles.container}>
      <Head>
        <title>West and Harrah</title>
        <meta
          name="description"
          content="Kristen West and Richard Harrah are getting married!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.poeImageWrapper}>
          <Image
            alt="Book of Edgar Allan Poe stories"
            src="/poe.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
        <div className={styles.weddingTextWrapper}>
          <p className={styles.ourNames}>Kristen West and Richard Harrah</p>
          {whatAreWeDoing}
          <p className={styles.weddingLocation}>
            The Edgar Allan Poe Museum, Richmond, VA
          </p>
          <p className={styles.weddingDatePrefix}>on</p>
          <p className={styles.weddingDate}>October 29, 2022</p>
        </div>
      </main>
    </div>
  );
}
