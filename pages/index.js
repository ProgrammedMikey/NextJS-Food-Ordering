import axios from 'axios'
import Head from 'next/head'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'

export default function Home({pizzaList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title> Mikeys Pizza</title>
        <meta name="description" content="Best pizza shop in Florida" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Featured />
       <PizzaList pizzaList={pizzaList} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get("https://3000-red-starfish-s71qliwx.ws-us33.gitpod.io/api/products");
  return {
    props: {
      pizzaList: res.data
    }
  }
}