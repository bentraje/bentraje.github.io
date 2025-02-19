import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import museums_json from "@/data/tokyo_museum.json";
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [hoveredMuseum, setHoveredMuseum] = useState(null);
  const [mapReady, setMapReady] = useState(false);  // Track map initialization
  const finalJSON = [
    // Example data format
    { position: [35.68177473416867, 139.76701069013842], name: "Museum A" },
    { position: [35.68977473416867, 139.73101069013842], name: "Museum B" }
    // Add more museum objects here
  ];

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmVudHJhamUiLCJhIjoiY202Y21iMDV5MGxlbDJpb29yd2Nsb3NyYSJ9.SN5kJoIquOV4MgzMeN3D_Q';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/bentraje/cm6donq1s004w01qrfs4d7x9q",
      center: [139.76701069013842, 35.68177473416867], // starting position [lng, lat]
      zoom: 12 // starting zoom
    });

    mapRef.current.on('load', () => {
      setMapReady(true);  // Set map as ready after it loads
    });

    // Cleanup on unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []); // Empty array ensures effect runs once

  useEffect(() => {
    if (!mapReady || !mapRef.current) return; // Wait for map to be ready

    // Add markers to the map based on finalJSON
    finalJSON.forEach((museum) => {
      const marker = new mapboxgl.Marker({ color: "red" })
        .setLngLat([museum.position[1], museum.position[0]]) // [lng, lat] order
        .addTo(mapRef.current);

      // Handle marker events
      marker.getElement().addEventListener("click", () => handleMarkerClick(museum));
      marker.getElement().addEventListener("mouseenter", () => {
        console.log("Weee");
        setHoveredMuseum(museum);
      });
      marker.getElement().addEventListener("mouseleave", () => setHoveredMuseum(null));
    });

    // Cleanup markers on unmount or when finalJSON changes
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, [mapReady, finalJSON]); // Trigger when mapReady or finalJSON changes

  const handleMarkerClick = (museum) => {
    console.log("Marker clicked:", museum);
    // Handle your marker click logic here
  };

  return (
    <div>
      <div ref={mapContainerRef} style={{ height: '400px', width: '100%' }} />
      {/* Render hovered museum info if any */}
      {hoveredMuseum && <div>{hoveredMuseum.name}</div>}
    </div>
  );
};

export default MapComponent;
