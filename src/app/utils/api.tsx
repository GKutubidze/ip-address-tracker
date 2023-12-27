import getLocationInfo from './getLocationInfo';

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

const Api = async (ips = ''): Promise<LocationData | null> => {
  try {
    const data = await getLocationInfo(ips);
    return data;
  } catch (error) {
    console.error('Error fetching location info:', error);
    return null;
  }
};

export default Api;
