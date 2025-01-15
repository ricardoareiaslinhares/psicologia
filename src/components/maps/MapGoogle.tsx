"use client";
import React, { FC } from "react";
import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
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
  // const consultotio = { lat: 41.564459, lng: -8.597515 }; // Lima saude

  const lat = consultotio.lat;
  const lng = consultotio.lng;

  const MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: MAPS_API_KEY,
    
  });


  const handleExternalLinkClick = () => {
    window.open(
      "https://www.google.com/maps/place/Ricardo+Linhares+Consultas+de+Psicologia+em+Barcelos+e+Online/@41.5470376,-8.6187725,15z/data=!4m2!3m1!1s0x0:0x21cda5f4855abfbb?sa=X&ved=2ahUKEwjj97uy2bWDAxU0SKQEHZZmCOYQ_BJ6BAhMEAA&cshid=1703889121089404",
      "_blank"
    );
  };

{/* 
  const handleExternalLinkClick = () => {
    window.open(
      "https://www.google.com/maps/place/Lima+Sa%C3%BAde+%7C+Unilabs/@41.5644668,-8.600156,17z/data=!3m1!4b1!4m6!3m5!1s0xd24536aec3ff353:0xe2ed6d1d9cfd1e30!8m2!3d41.5644668!4d-8.5975811!16s%2Fg%2F11l1fmyc36?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };
  */}
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
  
            <address 
              className="font-semibold text-sm text-primary"
            >
              Rua S. João de Deus, 59,<br/>4750-787 Vila Boa, Barcelos
         
            </address>
           
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
            //  text: "Clínica Lima Saúde",
              fontWeight: "900",
              fontSize: "16px",
              className: "labelText",
            }}
            title="Ricardo Linhares Consultas de Psicologia"
          //  title="Clínica Lima Saúde"
            onClick={handleExternalLinkClick}
          />
        </GoogleMap>  
      </span>
    </div>
  </div>
);

};

export default MapGoogle;
