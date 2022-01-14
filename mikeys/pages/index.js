import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Mikeys Pizza</title>
        <meta name="description" content="Best pizza in Florida" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        Homepage
        <Image src="/img/logo.jpg" alt="" />
    </div>
  )
}
