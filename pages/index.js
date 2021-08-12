import styles from '../styles/Home.module.css'
import Head from '../components/Layout/header.js'
import Mainstage from '../components/Home/mainstage'

export default function Home() {
  return (

    <div className={styles.container}>
        <Head />
        <Mainstage />        
    </div>
  )
}
