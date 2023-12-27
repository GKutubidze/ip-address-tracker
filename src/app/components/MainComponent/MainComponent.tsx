'use client'
import React, { useEffect, useState } from 'react';
import styles from './MainComponent.module.scss';
import MapComponent from '../MapComponent/MapComponent';
import Header from '../Header/Header';
import Api from '../../utils/api';

const MainComponent = () => {
  const [ipAddress, setIpAddress] = useState<string>('');
  const [data, setData] = useState<LocationData | null>(null);

  const fetchData = async () => {
    try {
      const result = await Api(ipAddress);
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Run the fetchData function on mount and whenever ipAddress changes
  }, [ipAddress]); // ipAddress as a dependency

  const ip = data?.ip || '';
  const location = data?.location || {
    country: '',
    region: '',
    city: '',
    lat: 0,
    lng: 0,
    postalCode: '',
    timezone: '',
    geonameId: 0,
  };
  const isp = data?.isp || '';
  const timezone = data?.location?.timezone || '';
  const lat = data?.location?.lat || 0;
  const lng = data?.location?.lng || 0;
  const Data = [
    {
      name: 'IP Address',
      content: data?.ip || '',
    },
    {
      name: 'Location',
      content: data?.location?.region || '',
    },
    {
      name: 'Timezone',
      content: data?.location?.timezone || '',
    },
    {
      name: 'ISP',
      content: data?.isp || '',
    },
  ];

  return (
    <div className={styles.main}>
      <Header ipAddress={ipAddress} setIpAddress={setIpAddress} Data={Data} />
      <MapComponent lat={lat} lng={lng} />
    </div>
  );
};

export default MainComponent;

interface LocationData {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
    geonameId: number;
  };
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
}
