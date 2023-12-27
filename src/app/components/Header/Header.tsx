import React from 'react'
import styles from "./Header.module.scss"
import SearchComponent from '../Search/SearchComponent'
import InfoComponent from '../Info/InfoComponent'
interface Props{
  ipAddress:string,
  setIpAddress: React.Dispatch<React.SetStateAction<string>>,
  Data: DataItem[];
}

interface DataItem {
  name: string;
  content: string;
  
}
const Header = (props:Props) => {
  const{ ipAddress,setIpAddress,Data}=props;
  return (
    <div className={styles.main}>
        <p className={styles.ip}>IP Address Tracker</p>
        <SearchComponent ipAddress={ipAddress} setIpAddress={setIpAddress}/>
        <InfoComponent ipAddress={ipAddress} Data={Data}/>
    </div>
  )
}

export default Header