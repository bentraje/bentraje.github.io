import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import Head from "next/head"; // Correctly import the Head component
import { GoogleAnalytics } from "@next/third-parties/google";
import Feedback from "@/components/FeedbackFormDialog";
import Link from "next/link";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });
const PHFestivalMap = dynamic(() => import("./phfestival_base.jsx"), {
  ssr: false,
});

const PHFestivalMapPage = () => {
  return (
    <>
      <Head>
        <title>Philippines Map Festival | Ben Traje</title> {/* Page title */}
      </Head>
      <div className={`${inter.className}`}>
        <PHFestivalMap />
      </div>
      <Feedback src="phfestivalmap" />
      <GoogleAnalytics gaId="G-XMRE4ES9RK" />
      <Link href="/tokyomap">
        <div
          className={`${inter.className} absolute bottom-2 left-1/2 -translate-x-1/2 z-10 bg-white/90 backdrop-blur-sm p-0 rounded-xl shadow-lg w-36`}
        >
          <div className="flex items-center justify-center mb-0">
            <p className="text-sm text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              See Other Maps
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PHFestivalMapPage;
