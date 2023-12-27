import React from 'react'

const API_KEY="at_yIn9QkqC0w3AngZAvSFHVcn2Iw8o2"
const API_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=`;

const getLocationInfo = async (ip="") => {
    try {
      const response = await fetch(`${API_URL}${ip}`);
      if (!response.ok) {
        throw new Error('Failed to fetch location data');
      }
      const data = await response.json();
       return data;
    } catch (error) {
      console.error('Error fetching location data:', error);
      return null;
    }
   
  };
export default getLocationInfo