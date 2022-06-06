import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Articles from "../components/Articles";
import styles from "../styles/Home.module.css";
import ImageDefault from "../pages/images/chup-anh-dep-anh-sang-min.jpg";
import Link from "next/link";
import Script from "next/script";
export default function Home({ posts }) {
  const x = 12;
  const color = "blue";
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="hello next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <main>
        <p className="title">This is title</p>
        <Articles posts={posts} />
        <Image src={ImageDefault} width={1000} height={1000} />
        <img src="https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg" />
        <Link href="/about">About</Link>
      </main>
      <style jsx>
        {`
          .title {
            font-size: ${x}px;
          }
          .title {
            color: ${color};
          }
        `}
      </style>
      <Script src="https://www.google-analytics.com/analytics.js" ></Script>
    </div>
  );
}

export async function getStaticProps() {
  const data = await axios.get("https://nextjs112.herokuapp.com/api/post");
  return {
    props: {
      posts: data.data.posts,
    },
    revalidate: 60,
  };
}
