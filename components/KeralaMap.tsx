"use client";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import type { Destination } from "@/data/destinations";

function FitBounds({ places }: { places: Destination[] }) {
  const map = useMap();
  useEffect(() => {
    if (places.length) map.fitBounds(places.map(p => [p.lat, p.lng] as [number, number]), { padding: [28, 28], maxZoom: 9 });
  }, [map, places]);
  return null;
}

export default function KeralaMap({ places, onSelect }: { places: Destination[]; onSelect: (place: Destination) => void }) {
  return <div className="map-shell">
    <MapContainer center={[10.45, 76.25]} zoom={7} scrollWheelZoom={false} className="kerala-map">
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <FitBounds places={places} />
      {places.map(p => <CircleMarker key={p.id} center={[p.lat,p.lng]} radius={7} pathOptions={{ color: "#f6fff8", weight: 2, fillColor: "#0b6b52", fillOpacity: .95 }}>
        <Popup><div className="map-popup"><b>{p.name}</b><span>{p.district} · {p.coordinatesSource?"source-linked pin":"reference pin; confirm locally"}</span><button onClick={() => onSelect(p)}>Open field note ↗</button></div></Popup>
      </CircleMarker>)}
    </MapContainer>
    <div className="map-credit">MAP DATA © OPENSTREETMAP CONTRIBUTORS · PINS ARE EDITORIAL REFERENCE POINTS</div>
  </div>;
}
