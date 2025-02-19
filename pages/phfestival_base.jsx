import React from "react";
import { useEffect, useState } from "react";
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
import phfestivals_json from "@/data/phmap/phfestivals.json";
import { Inter } from "next/font/google";

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
    const searchQuery = `${museum.name} ${museum.location}`;
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
          🥳🎈 Philippines Festival Map 🎉🎊
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
            longitude: 122.3,
            latitude: 12.5333,
            zoom: isMobile ? 4 : 5,
          }}
          mapboxAccessToken={YOUR_MAPBOX_TOKEN} // Insert your Mapbox access token here
          minZoom={4} // Minimum zoom level
          maxZoom={11} // Maximum zoom level
          projection="mercator" // Set the map to flat mode
          mapStyle="mapbox://styles/bentraje/cm6donq1s004w01qrfs4d7x9q" // Map style URL
          style={{ width: "100%", height: "100vh" }} // Full height map
          attributionControl={false}
        >
          {finalJSON.map((museum, index) => (
            <Marker
              key={index}
              longitude={museum.position[1]}
              latitude={museum.position[0]}
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
            ></Marker>
          ))}
          {hoveredMuseum && (
            <Popup
              longitude={hoveredMuseum.position[1]}
              latitude={hoveredMuseum.position[0]}
              anchor="top"
              closeButton={false}
            >
              {hoveredMuseum.name}
            </Popup>
          )}
        </Map>
      </div>
    </div>
  );
};

export default MapComponent;
