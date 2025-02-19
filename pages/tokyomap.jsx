import React from 'react';
import "@/app/globals.css";
import Link from 'next/link'
import Feedback from "@/components/FeedbackFormDialog";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


const stations = [
  ['Tokyo Musems','/tokyomuseum'],
  ['Tokyo Festivals','/tokyofestival'],
  ['Tokyo Day Trips', '/tokyodaytrip'],
//   ['Yamanote Line Tourist Area', '/yamanotetour'],
  ['Tokyo Markets Shotengai', '/tokyomarket'],
  ['Tokyo Outlet Stores', '/tokyooutlet'],
  ['PH Festivals', '/phmapfestival']
];

const StationGrid = () => {
  return (
    <div className={`${inter.className} p-6 max-w-5xl mx-auto`}>
      <h1 className="text-xl font-bold mb-2 text-center text-gray-800 dark:text-white">
      🗺️📍Tokyo Map Guides(?)🤔😵‍💫
      </h1>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm mb-5">
      Random Tokyo notes, mapped out from my previous and upcoming trips. Hopefully, this can help others too! Feel free to share your  <Feedback src="tokyomaps"  triggerType = 'text' linkText = 'suggestions 🔗'/>
          </p>

   
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
        {stations.map((station, index) => (
      <Link href={station[1]}>
      <div
        key={index}
        className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center cursor-pointer"
      >
        <span className="text-center text-gray-700 dark:text-gray-200 font-medium">
          <h2>{station[0]}</h2>
        </span>
      </div>
    </Link>   
        ))}
      </div>
    </div>
  );
};

export default StationGrid;