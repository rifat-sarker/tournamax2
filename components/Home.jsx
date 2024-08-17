"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useState } from "react";



export default function HomePage() {
  const markers = [
    { position: [28.6139, 77.209], label: "New Delhi" },
    { position: [19.076, 72.8777], label: "Mumbai" },
    { position: [13.0827, 80.2707], label: "Chennai" },
    { position: [22.5726, 88.3639], label: "Kolkata" },
    { position: [12.9716, 77.5946], label: "Bangalore" },
  ];
  const [center, setCenter] = useState(markers[0].position);

  const customIcon = new Icon({
    iconUrl: "https://i.ibb.co/tbxgvtY/placeholder.png",
    iconSize: [38, 38],
  });

  return (
    <MapContainer
      style={{ height: "100vh", width: "100%" }}
      center={center}
      zoom={4}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker
          key={marker.label}
          position={marker.position}
          icon={customIcon}
          eventHandlers={{
            click: () => {
              setCenter(marker.position);
            },
          }}
        >
          <Popup>{marker.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
