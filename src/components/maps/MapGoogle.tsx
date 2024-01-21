"use client";
import React, { FC, Suspense } from "react";
import {
  GoogleMap,
  InfoWindowF,
  LoadScript,
  MarkerF,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";
import "@/components/maps/styles.css";
import Loading from "./Loading";
import { TbLocationFilled } from "react-icons/tb";

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

      "AIzaSyDDt8v-PmUjYPDUXSkJ4xqtUNJamXcRxNo",
  });

  const handleExternalLinkClick = () => {
    window.open(
      "https://www.google.com/maps/place/Ricardo+Linhares+Consultas+de+Psicologia+em+Barcelos+e+Online/@41.5470376,-8.6187725,15z/data=!4m2!3m1!1s0x0:0x21cda5f4855abfbb?sa=X&ved=2ahUKEwjj97uy2bWDAxU0SKQEHZZmCOYQ_BJ6BAhMEAA&cshid=1703889121089404",
      "_blank"
    );
  };

  if (!isLoaded) return <Loading/>
return (
  <div> 
    <div className=" w-[300px] h-[300px]  sm:w-[500px] sm:h-[400px] relative items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 z-10 p-2">
        <span className="flex flex-col  px-4 py-2 border-2 rounded-md cursor-pointer
        bg-card
        hover:bg-gradient-to-b hover:from-card hover:to-muted
        "
        onClick={handleExternalLinkClick}
        >
          <div className="flex flex-row items-center justify-center gap-x-3">
          <TbLocationFilled size={24} color={"orange"}  />
            <div 
              className="flex flex-col "
             
            >
              <p className="font-semibold text-sm text-primary">Rua S. João de Deus, 59,</p>
              <p className="font-semibold text-sm text-primary">Vila Boa, Barcelos</p>
            </div>
          </div>
        </span>
      </div>
      <span className="z-0">
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
        </GoogleMap>  
      </span>
    </div>
  </div>
);

};

export default MapGoogle;
