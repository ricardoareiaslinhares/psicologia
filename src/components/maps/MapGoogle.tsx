"use client";
import React, { FC } from "react";
import {
  GoogleMap,
  InfoWindowF,
  LoadScript,
  MarkerF,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";
import "@/components/maps/styles.css";

interface MapProps {}

const MapGoogle: FC<MapProps> = ({}) => {
  const mapStyles = {
    height: "100%",
    width: "100%",
  };
  const consultotio = { lat: 41.54696619232324, lng: -8.6188 };
  const lat = consultotio.lat;
  const lng = consultotio.lng;

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey:
      (process.env.MAPS_API as string) ||
      "AIzaSyDDt8v-PmUjYPDUXSkJ4xqtUNJamXcRxNo",
  });

  const handleExternalLinkClick = () => {
    window.open(
      "https://www.google.com/maps/place/Ricardo+Linhares+Consultas+de+Psicologia+em+Barcelos+e+Online/@41.5470376,-8.6187725,15z/data=!4m2!3m1!1s0x0:0x21cda5f4855abfbb?sa=X&ved=2ahUKEwjj97uy2bWDAxU0SKQEHZZmCOYQ_BJ6BAhMEAA&cshid=1703889121089404",
      "_blank"
    );
  };

  if (!isLoaded) return "Loading...";
  return (
    <div className=" w-[300px] h-[300px]  sm:w-[500px] sm:h-[400px] flex items-center justify-center overflow-hidden">
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={{ lat, lng }}
        zoom={15}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          zoomControl: true,
        }}
      >
        <MarkerF
          position={{ lat, lng }}
          label={{
            color: "orange",
            text: "Ricardo Linhares Psicologia",
            fontWeight: "900",
            fontSize: "16px",
            className: "labelText",
          }}
          title="Ricardo Linhares Consultas de Psicologia"
          onClick={handleExternalLinkClick}
        />
        {/*    <InfoWindowF position={{ lat, lng }}>
            <p>Ricardo Linhares Psicólogo</p>
        </InfoWindowF> */}
      </GoogleMap>
    </div>
  );
};

export default MapGoogle;
