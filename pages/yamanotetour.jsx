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
import tokyo_museum from "@/data/tokyo/yamanote_line_markers.json";
import yamanote_line from "@/data/tokyo/yamanote_line.json";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Feedback from "@/components/FeedbackFormDialog";
import PinIcon from "@/components/PinIcon";

const inter = Inter({ subsets: ["latin"] });

const YOUR_MAPBOX_TOKEN =
  "pk.eyJ1IjoiYmVudHJhamUiLCJhIjoiY202Y25hZ3N5MGhjYTJpc2R0MXR5cDlzdCJ9.jjTJwGtgOzI4fGZDNJ8wRg";

const MapComponent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredMuseum, setHoveredMuseum] = useState(null);
  const [clickedMuseum, setClickedMuseum] = useState(null);
  const [selectedPop, setSelectedPop] = useState(5);
  const [selectedMuseumType, setSelectedMuseumType] = useState(5);
  const [finalJSON, setFinalJSON] = useState(tokyo_museum);

  const stations = [
    "Shinagawa",
    "Osaki",
    "Gotanda",
    "Meguro",
    "Ebisu",
    "Shibuya",
    "Harajuku",
    "Yoyogi",
    "Shinjuku",
    "Shin-Okubo",
    "Takadanobaba",
    "Mejiro",
    "Ikebukuro",
    "Otsuka",
    "Sugamo",
    "Komagome",
    "Tabata",
    "Nishi-Nippori",
    "Nippori",
    "Uguisudani",
    "Ueno",
    "Okachimachi",
    "Akihabara",
    "Kanda",
    "Tokyo",
    "Yurakucho",
    "Shimbashi",
    "Hamamatsucho",
    "Tamachi",
    "Takanawa Gateway",
  ];
  
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
        <title>Tokyo In And Around Tokyo Train | Ben Traje</title>{" "}
        {/* Page title */}
      </Head>
      <div className={`${inter.className}`}>
        <div className="relative w-full h-screen">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-white/90 p-2 rounded-lg shadow-lg w-96">
            <h1 className="text-lg font-bold text-center">
              🏯🖼️ Yamanote Line Stations 🎨🏺
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
            </div>
          </div>

          <div className="absolute inset-0 z-0">
            <Map
              initialViewState={{
                longitude: 139.76705077707368,
                latitude: 35.681501242868755,
                zoom: isMobile ? 5 : 11,
              }}
              projection="mercator" // Flat map (Mercator projection)
              mapboxAccessToken={YOUR_MAPBOX_TOKEN} // Insert your Mapbox access token here
              minZoom={9} // Minimum zoom level
              maxZoom={16} // Maximum zoom level
              mapStyle="mapbox://styles/bentraje/cm6donq1s004w01qrfs4d7x9q" // Map style URL
              style={{ width: "100%", height: "100vh" }} // Full height map
              attributionControl={false}
              doubleClickZoom={false}
            >
              {yamanote_line && (
                <Source
                  id="yamanonete-layer"
                  type="geojson"
                  data={yamanote_line}
                >
                  <Layer
                    id="yamanonete-layer"
                    type="line"
                    paint={{
                      "line-color": "#00A650",
                      "line-width": 5,
                    }}
                    layout={{
                      "line-cap": "round",
                      "line-join": "round",
                    }}
                  />
                </Source>
              )}

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
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "15px",
                      top: "25px",
                      backgroundColor: "white",
                      padding: "5px",
                      borderRadius: "4px",
                      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <p className={`${inter.className}`}>{museum.name}</p>
                  </div>
                  <PinIcon />
                </Marker>
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
            </Map>
            <Feedback src="yamanotetour" />
          </div>
        </div>
      </div>
      <GoogleAnalytics gaId="G-XMRE4ES9RK" />
    </>
  );
};

export default MapComponent;
