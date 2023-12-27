import { useEffect, useState } from 'react';
import MapComponent from './components/MapComponent/MapComponent';
import styles from './page.module.scss'
import getLocationInfo from "./utils/getLocationInfo"
import MainComponent from './components/MainComponent/MainComponent';
import InfoComponent from './components/Info/InfoComponent';

export default function Home() {



  return (
    <main className={styles.main}>
      <MainComponent/>
    </main>
  )
}
