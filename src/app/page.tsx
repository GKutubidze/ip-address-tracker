import styles from './page.module.scss'
 import MainComponent from './components/MainComponent/MainComponent';
 
export default function Home() {



  return (
    <main className={styles.main}>
      <MainComponent/>
    </main>
  )
}
