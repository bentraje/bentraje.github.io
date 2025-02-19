import React from "react";
import { useEffect, useState } from "react";
import "@/app/globals.css";
import Link from 'next/link';
import Feedback from "@/components/FeedbackFormDialog";

// import { MapContainer, TileLayer, Marker, ZoomControl, Tooltip, Popup  } from "react-leaflet";

import Map, {
  NavigationControl,
  Marker,
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
import phfestivals_json from "@/data/tokyo/tokyo_festival_markers.json";
import { Inter } from "next/font/google";
import PinIcon from "@/components/PinIcon";

const inter = Inter({ subsets: ["latin"] });

const YOUR_MAPBOX_TOKEN =
  "pk.eyJ1IjoiYmVudHJhamUiLCJhIjoiY202Y25hZ3N5MGhjYTJpc2R0MXR5cDlzdCJ9.jjTJwGtgOzI4fGZDNJ8wRg";

const MapComponent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredMuseum, setHoveredMuseum] = useState(null);
  const januaryFestivals = phfestivals_json.filter(
    (festival) => festival.month === "January"
  );

  
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedPop, setSelectedPop] = useState(3);
  const [finalJSON, setFinalJSON] = useState(januaryFestivals);

  const months_str = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const pop_str = ["low", "medium", "high", "all"];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const pop_list = ["Least Popular", " ", "Most Popular", "All"];

  const handleMonthSliderChange = (value) => {
    setSelectedMonth(value[0]);
  };

  const handlePopSliderChange = (value) => {
    setSelectedPop(value[0]);
  };

  useEffect(() => {
    // setFinalJSON(phfestivals_json.filter(festival => festival.month === months_str[selectedMonth]));
    // setFinalJSON(phfestivals_json.filter(festival => festival.popularity === pop_str[selectedPop]));

    setFinalJSON(
      phfestivals_json.filter(
        (festival) =>
          festival.month === months_str[selectedMonth] &&
          (pop_str[selectedPop] === "all" ||
            festival.popularity === pop_str[selectedPop])
      )
    );
  }, [selectedMonth, selectedPop]);

  const handleMarkerClick = (museum) => {
    const searchQuery = `${museum.name} Tokyo`;
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      searchQuery
    )}`;
    window.open(googleSearchUrl, "_blank");
  };

  useEffect(() => {
    // Only run this on the client-side
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initialize on component mount
    handleResize();

    // Add event listener to track window resizing
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-white/90 p-2 rounded-lg shadow-lg w-96">
        <h1 className="text-lg font-bold text-center">
          🥳🎈 Tokyo Festival Map 🎉🎊
        </h1>
        <div className="w-full max-w-md mb-0 mt-4 ">
          <Slider
            min={0}
            max={11}
            step={1}
            value={[selectedMonth]}
            onValueChange={handleMonthSliderChange}
            className="w-full"
          />
          <div className="flex justify-between mt-2">
            {months.map((month, index) => (
              <span
                key={month}
                className={`text-sm ${
                  index === selectedMonth ? "font-bold" : ""
                }`}
              >
                {month}
              </span>
            ))}
          </div>
        </div>
        <div className="w-full max-w-md mb-0 mt-4 ">
          <Slider
            min={0}
            max={3}
            step={1}
            value={[selectedPop]}
            onValueChange={handlePopSliderChange}
            className="w-full"
          />

          <div className="flex justify-between mt-2">
            {pop_list.map((month, index) => (
              <span
                key={month}
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
            zoom: 10,
          }}
          mapboxAccessToken={YOUR_MAPBOX_TOKEN} // Insert your Mapbox access token here
          minZoom={9} // Minimum zoom level
          maxZoom={14} // Maximum zoom level
          projection="mercator" // Set the map to flat mode
          mapStyle="mapbox://styles/bentraje/cm6donq1s004w01qrfs4d7x9q" // Map style URL
          style={{ width: "100%", height: "100vh" }} // Full height map
          attributionControl={false}
        >
          {finalJSON.map((museum, index) => (
            <Marker
              key={index}
              longitude={museum.longitude === "general" ? 139.76709941254612 : museum.longitude}
              latitude={museum.latitude === "general" ?  35.6816038878635 : museum.latitude}
              color="red"
              width={30} // You can adjust size
              height={30} // You can adjust size
              anchor="bottom"
              onClick={() => handleMarkerClick(museum)}
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
          {hoveredMuseum && (
            <Popup
              longitude={hoveredMuseum.longitude}
              latitude={hoveredMuseum.latitude}
              anchor="top"
              closeButton={false}
            >
              {hoveredMuseum.name}
            </Popup>
          )}
        </Map>
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

                <Feedback src="tokyofestival" />

    </div>
  );
};

export default MapComponent;
