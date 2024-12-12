import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'your-mapbox-token';

const MapView = ({ address }) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [address.lng, address.lat],
      zoom: 12,
    });

    new mapboxgl.Marker().setLngLat([address.lng, address.lat]).addTo(map);

    return () => map.remove();
  }, [address]);

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default MapView;
