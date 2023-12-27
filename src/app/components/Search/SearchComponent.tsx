"use client";
import React, { ChangeEvent, useState } from "react";
import styels from "./SearchComponent.module.scss";
import arrow from "../../../../public/images/icon-arrow.svg";
import Image from "next/image";
interface Props{
  ipAddress:string,
   setIpAddress: React.Dispatch<React.SetStateAction<string>>
}
const SearchComponent = (props:Props) => {
  const{ ipAddress,setIpAddress}=props;
  const [tempIp,setTempIp]=useState<string>("");
  const[isClicked,setIsCklicked]=useState<boolean>(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const regex = /^[0-9\b]+$/; // Regex pattern allowing only numbers
  
    if (input === "" || regex.test(input)) {
      setTempIp(input);
    }
  };
  
   return (
    <div className={styels.main}>
      <input
        type="text"
        id="ipAddress"
        placeholder="Enter IP address"
        value={tempIp}
        onChange={handleChange}
       
      />
      <Image src={arrow} alt="" className={styels.arrow}  onClick={()=>{
        setIsCklicked(!isClicked);
        setIpAddress(tempIp);
      }}/>
    </div>
  );
};

export default SearchComponent;
