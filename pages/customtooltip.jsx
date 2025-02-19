import React, { useState } from "react";
import { Map, Marker } from "react-map-gl";
import "leaflet/dist/leaflet.css";
import "mapbox-gl/dist/mapbox-gl.css";

const YOUR_MAPBOX_TOKEN =
  "pk.eyJ1IjoiYmVudHJhamUiLCJhIjoiY202Y25hZ3N5MGhjYTJpc2R0MXR5cDlzdCJ9.jjTJwGtgOzI4fGZDNJ8wRg";

const MapWithTooltip = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const markerData = {
    name: "Tokyo Station",
    longitude: 139.76705077707368,
    latitude: 35.681501242868755,
  };

  return (
    <Map
      initialViewState={{
        longitude: markerData.longitude,
        latitude: markerData.latitude,
        zoom: 11,
      }}
      mapboxAccessToken={YOUR_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/bentraje/cm6donq1s004w01qrfs4d7x9q"
      style={{ width: "100%", height: "100vh" }}
      attributionControl={false}
    >
      <Marker
        longitude={markerData.longitude}
        latitude={markerData.latitude}
        anchor="bottom"
      >
        <img
          src="/public/images/torigate.png"
          alt="Torii Gate"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          style={{
            width: "24px",
            height: "24px",
            cursor: "pointer",
          }}
        />
        {showTooltip && (
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
            {markerData.name}
          </div>
        )}
      </Marker>
    </Map>
  );
};

export default MapWithTooltip;
