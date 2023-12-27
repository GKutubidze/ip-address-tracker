"use client"
import React, { useEffect, useState } from 'react'
import styles from "./ InfoComponent.module.scss"
import InfoChild from './InfoChild'
 type Props={
  ipAddress:string;
  Data: DataItem[];
}
interface DataItem {
  name: string;
  content: string;
  
}
const InfoComponent = (props:Props) => {

 


  const {ipAddress,Data}=props;
  return (
    <div className={styles.main}>
         {Data.map((info, index) => (
        <InfoChild key={index} name={info.name} content={info.content} />
      ))}
    </div>
  )
}

export default InfoComponent;

 