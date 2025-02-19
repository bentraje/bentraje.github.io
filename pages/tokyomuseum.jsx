"use client";

import "@/app/globals.css";
import Head from "next/head"; // Correctly import the Head component
import React from "react";
import { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, ZoomControl, Tooltip, Popup  } from "react-leaflet";

import Map, {
  NavigationControl,
  Marker,
  Popup,
  Source,
  Layer,
  AttributionControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { Slider } from "@/components/ui/slider";
import tokyo_museum from "@/data/tokyo_museum";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Feedback from "@/components/FeedbackFormDialog";
import Link from 'next/link';
import  {Metadata} from "next";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  openGraph: {
    images: [
      {
        url: 'https://bentraje.com/images/preview/tokyo_museum_map_preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Tokyo Museum Map',
      },
    ],
  },
};

const YOUR_MAPBOX_TOKEN =
  "pk.eyJ1IjoiYmVudHJhamUiLCJhIjoiY202Y25hZ3N5MGhjYTJpc2R0MXR5cDlzdCJ9.jjTJwGtgOzI4fGZDNJ8wRg";

const MapComponent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredMuseum, setHoveredMuseum] = useState(null);
  const [clickedMuseum, setClickedMuseum] = useState(null);
  const [selectedPop, setSelectedPop] = useState(5);
  const [selectedMuseumType, setSelectedMuseumType] = useState(5);
  const [finalJSON, setFinalJSON] = useState(tokyo_museum);

  const pop_str = ["E", "D", "C", "B", "A", "all"];
  const pop_list = ["Least Popular", " ", " ", " ", "Most Popular", "All"];

  const museum_type_list = [
    "specialty",
    "general",
    "art",
    "stem",
    "history",
    "all",
  ];

  const handlePopSliderChange = (value) => {
    setSelectedPop(value[0]);
  };

  const handleMuseumTypeSliderChange = (value) => {
    setSelectedMuseumType(value[0]);
  };

  useEffect(() => {
    // setFinalJSON(phfestivals_json.filter(festival => festival.month === months_str[selectedMonth]));
    // setFinalJSON(phfestivals_json.filter(festival => festival.popularity === pop_str[selectedPop]));

    setFinalJSON(
      tokyo_museum.filter(
        (festival) =>
          (pop_str[selectedPop] === "all" ||
            festival.popularity === pop_str[selectedPop]) &&
          (museum_type_list[selectedMuseumType] === "all" ||
            festival.category === museum_type_list[selectedMuseumType])
      )
    );
  }, [selectedPop, selectedMuseumType]);

  const handleMarkerClick = (museum, event) => {
    event.originalEvent.stopPropagation();
    setClickedMuseum(museum);
    // const searchQuery = `${museum.name} Tokyo`;
    // const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
    //   searchQuery
    // )}`;
    // window.open(googleSearchUrl, "_blank");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Only run on client-side (after SSR)
      setIsMobile(window.innerWidth <= 768);
    }
  }, []); // Empty dependency array ensures this runs once after mount

  return (
    <>
      <Head>
        <title>Tokyo Museum Map | Ben Traje</title> {/* Page title */}
        <meta property="og:title" content="Tokyo Museum Map" />
        <meta property="og:description" content="Explore the best museums in Tokyo on a map." />
        <meta property="og:image" content="https://bentraje.com/images/preview/tokyo_museum_map_preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bentraje.com/tokyomuseum" />        
      </Head>
      <div className={`${inter.className}`}>
        <div className="relative w-full h-screen">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-white/90 p-2 rounded-lg shadow-lg w-96">
            <h1 className="text-lg font-bold text-center">
              🏯🖼️ Tokyo Museum Map 🎨🏺
            </h1>
            <div className="w-full max-w-md mb-0 mt-4 ">
              <Slider
                min={0}
                max={5}
                step={1}
                value={[selectedPop]}
                onValueChange={handlePopSliderChange}
                className="w-full"
              />

              <div className="flex justify-between mt-2">
                {pop_list.map((month, index) => (
                  <span
                    key={`${month}-${index}`}
                    className={`text-sm ${
                      index === selectedPop ? "font-bold" : ""
                    }`}
                  >
                    {month}
                  </span>
                ))}
              </div>
              <Slider
                min={0}
                max={5}
                step={1}
                value={[selectedMuseumType]}
                onValueChange={handleMuseumTypeSliderChange}
                className="w-full mt-2"
              />

              <div className="flex justify-between mt-2">
                {museum_type_list.map((month, index) => (
                  <span
                    key={`${month}-${index}`}
                    className={`text-sm ${
                      index === selectedMuseumType ? "font-bold" : ""
                    }`}
                  >
                    {month}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute inset-0 z-0">
            <Map
              initialViewState={{
                longitude: 139.76705077707368,
                latitude: 35.681501242868755,
                zoom: isMobile ? 5 : 11,
              }}
              mapboxAccessToken={YOUR_MAPBOX_TOKEN} // Insert your Mapbox access token here
              minZoom={10} // Minimum zoom level
              maxZoom={16} // Maximum zoom level
              mapStyle="mapbox://styles/bentraje/cm6donq1s004w01qrfs4d7x9q" // Map style URL
              style={{ width: "100%", height: "100vh" }} // Full height map
              attributionControl={false}
              doubleClickZoom={false}
            >
              {/*           
          <NavigationControl position="bottom-right" /> */}
              {finalJSON.map((museum, index) => (
                <Marker
                  key={index}
                  longitude={museum.longitude}
                  latitude={museum.latitude}
                  color="red"
                  width={30} // You can adjust size
                  height={30} // You can adjust size
                  anchor="bottom"
                  onClick={(event) => handleMarkerClick(museum, event)}
                  onMouseEnter={() => {
                    console.log("Weee"); // Check if this logs
                    setHoveredMuseum(museum);
                  }}
                  onMouseLeave={() => setHoveredMuseum(null)}
                  style={{ cursor: "pointer" }}
                ></Marker>
              ))}

              {clickedMuseum && (
                <Popup
                  longitude={clickedMuseum.longitude}
                  latitude={clickedMuseum.latitude}
                  anchor="top"
                  onClose={() => setClickedMuseum(null)}
                  className="rounded-2xl p-4"
                  focusAfterOpen={true}
                  closeButton={false}
                  maxWidth={400}
                >
                  <div>
                    <h3 className={`${inter.className} text-base font-bold`}>
                      {clickedMuseum.name}
                    </h3>
                    <div className="flex space-x-4">
                      {" "}
                      {/* Flex applied to the second row */}
                      {clickedMuseum.website ? (
                        <a
                          href={clickedMuseum.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "blue", textDecoration: "underline" }}
                          className="mr-2"
                        >
                          Visit Official Website
                        </a>
                      ) : (
                        <p className="m-0">No website available</p>
                      )}
                      <a
                        href={`https://www.google.com/search?q=${encodeURIComponent(
                          clickedMuseum.name
                        )} Tokyo`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "blue", textDecoration: "underline" }}
                      >
                        Visit Google Search
                      </a>
                    </div>
                  </div>
                </Popup>
              )}

              {/* {finalJSON.map((museum, index) => (
              <Popup
                longitude={museum.longitude}
                latitude={museum.latitude}
                anchor="left"
                onClose={() => setClickedMuseum(null)}
                closeOnClick={true}
              >
                <div>
                  <h3>{museum.name}</h3>
                  {museum.website ? (
                    <a
                      href={museum.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue", textDecoration: "underline" }}
                    >
                      Visit Website
                    </a>
                  ) : (
                    <p>No website available</p>
                  )}
                </div>
              </Popup>
            ))}           */}
              {/* {hoveredMuseum && (
            <Popup
              longitude={hoveredMuseum.position[1]}
              latitude={hoveredMuseum.position[0]}
              anchor="top"
              closeButton={false}
            >
              {hoveredMuseum.name}
            </Popup>
          )} */}
            </Map>
            <Feedback src="tokyomuseummap" />
          </div>

          {/* Filter Controls - Now positioned at the bottom */}
          <Link href='/tokyomap'>
          <div className={`${inter.className} absolute bottom-2 left-1/2 -translate-x-1/2 z-10 bg-white/90 backdrop-blur-sm p-0 rounded-xl shadow-lg w-36`}>
            <div className="flex items-center justify-center mb-0">
              <p className="text-sm text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                See Other Maps
              </p>
            </div>
          </div>
          </Link>
        </div>
      </div>
      <GoogleAnalytics gaId="G-XMRE4ES9RK" />
    </>
  );
};

export default MapComponent;
