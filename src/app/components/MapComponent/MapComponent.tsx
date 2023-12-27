import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconUrl from '../../../../public/images/icon-location1.svg';
import styles from './MapComponent.module.scss';

const customIcon = new L.Icon({
  iconUrl: iconUrl.src,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

interface Props {
  lat: number;
  lng: number;
}

const MapComponent = (props: Props) => {
  const { lat, lng } = props;
  const defaultPosition: [number, number] = [0, 0];
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (mapRef.current && lat && lng) {
      mapRef.current.setView([lat, lng], 13);
    }
  }, [mapRef, lat, lng]);

  const position: [number, number] = [lat, lng];

  return (
    <div className={styles.main}>
      <MapContainer
        ref={mapRef}
        center={lat && lng ? position : defaultPosition}
        zoom={lat && lng ? 13 : 1}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {lat && lng && (
          <Marker position={position} icon={customIcon}>
            <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
