import React, { useState } from "react";
import Head from "next/head"; // Correctly import the Head component
import ReactMarkdown from "react-markdown";
import Map, { Source, Layer, Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "@/app/globals.css";
import "leaflet/dist/leaflet.css";
import daytrip_json from "@/data/tokyo/tokyo_daytrip_markers.json";
import PinIcon from "@/components/PinIcon";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Slider } from "@/components/ui/slider";
import Feedback from "@/components/FeedbackFormDialog";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

const YOUR_MAPBOX_TOKEN =
  "pk.eyJ1IjoiYmVudHJhamUiLCJhIjoiY202Y25hZ3N5MGhjYTJpc2R0MXR5cDlzdCJ9.jjTJwGtgOzI4fGZDNJ8wRg";

// Function to generate random HEX color
const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;

export default function MapPage({ geoJsonFiles }) {
  const [isHovering, setIsHovering] = useState(false);
  const [clickedDayTrip, setClickedDayTrip] = useState(null);
  const [selectedPop, setSelectedPop] = useState(5);

  const pop_str = ["E", "D", "C", "B", "A", "all"];
  const pop_list = ["Least Popular", " ", " ", " ", "Most Popular", "All"];

  const handlePopSliderChange = (value) => {
    setSelectedPop(value[0]);
  };

  const handleMarkerClick = (museum, event) => {
    event.originalEvent.stopPropagation();
    setClickedDayTrip(museum);
    // const searchQuery = `${museum.name} Tokyo`;
    // const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
    //   searchQuery
    // )}`;
    // window.open(googleSearchUrl, "_blank");
  };

  return (
    <>
      <Head>
        <title>Tokyo Day Trip | Ben Traje</title> {/* Page title */}
      </Head>
      <div className={`${inter.className}`}>
        <div className="relative w-full h-screen">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-white/90 p-2 rounded-lg shadow-lg w-96">
            <h1 className="text-lg font-bold text-center">
            🚄🏞️ Tokyo Day Trips 🎢🏯
            </h1>
            {/* <div className="w-full max-w-md mb-0 mt-4 ">
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
            </div> */}
          </div>

          <div className="absolute inset-0 z-0">
            <Map
              initialViewState={{
                longitude: 139.76705077707368,
                latitude: 35.681501242868755,
                zoom: 5,
              }}
              mapboxAccessToken={YOUR_MAPBOX_TOKEN}
              minZoom={7}
              maxZoom={10}
              // mapStyle="mapbox://styles/bentraje/cm6donq1s004w01qrfs4d7x9q"
              mapStyle="mapbox://styles/mapbox/light-v11"
              style={{ width: "100%", height: "100vh" }}
              attributionControl={false}
              doubleClickZoom={false}
              interactiveLayerIds={Object.keys(geoJsonFiles).map(
                (key) => `${key}-layer`
              )}
            >
              {Object.entries(geoJsonFiles).map(([key, data]) => {
                const randomColor = getRandomColor();
                const dynamicLineStyle = {
                  type: "line",
                  paint: {
                    "line-color": randomColor,
                    "line-width": 3,
                  },
                  layout: {
                    "line-cap": "round",
                    "line-join": "round",
                  },
                };

                return (
                  <Source
                    key={key}
                    id={`${key}-layer`}
                    type="geojson"
                    data={data}
                  >
                    <Layer {...dynamicLineStyle} id={`${key}-layer`} />
                  </Source>
                );
              })}

              {daytrip_json.map((museum, index) => (
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
                      top: "-25px",
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

              {clickedDayTrip && (
                <Popup
                  longitude={clickedDayTrip.longitude}
                  latitude={clickedDayTrip.latitude}
                  anchor="top"
                  onClose={() => setClickedDayTrip(null)}
                  className="rounded-2xl p-4"
                  focusAfterOpen={true}
                  closeButton={false}
                  maxWidth={400}
                >
                  <div>
                    <h3 className={`${inter.className} text-base font-bold`}>
                      {clickedDayTrip.name.toUpperCase()}
                    </h3>

                    {/* Description row */}
                    <div
                      className={`${inter.className} mb-2`}
                      style={{ width: "320px" }}
                    >
                      <ReactMarkdown>
                        {clickedDayTrip.description}
                      </ReactMarkdown>
                    </div>

                    {/* Links row */}
                    <div className="flex space-x-4">
                      <a
                        href={`https://www.google.com/search?q=${encodeURIComponent(
                          clickedDayTrip.name
                        )} Day Trip`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "blue", textDecoration: "underline" }}
                        className={`${inter.className}`}
                      >
                        Google Search
                      </a>
                    </div>
                  </div>
                </Popup>
              )}
            </Map>
            <Feedback src="tokyomuseummap" />
            {isHovering && (
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  background: "white",
                  padding: "5px",
                }}
              >
                Hovering over GeoJSON
              </div>
            )}
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

                <Feedback src="tokyodaytrip" />

        </div>
      </div>
      <GoogleAnalytics gaId="G-XMRE4ES9RK" />
      
    </>
  );
}

export async function getStaticProps() {
  const fs = require("fs");
  const path = require("path");
  const dirPath = path.join(process.cwd(), "data/tokyo/geojson");

  const geoJsonFiles = fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith(".json"))
    .reduce((acc, file) => {
      const name = path.basename(file, ".json");
      acc[name] = JSON.parse(fs.readFileSync(path.join(dirPath, file), "utf8"));
      return acc;
    }, {});

  return {
    props: {
      geoJsonFiles,
    },
  };
}
