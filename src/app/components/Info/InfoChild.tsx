import React from 'react'
import styles from "./InfoChild.module.scss"
interface Props{
    name:string;
    content:string;
}
const InfoChild = (props:Props) => {
    const {name,content}=props;
  return (
    <div className={styles.main}>
        <p className={styles.address}>{name}</p>
        <p className={styles.ip}>{content}</p>
    </div>
  )
}

export default InfoChild