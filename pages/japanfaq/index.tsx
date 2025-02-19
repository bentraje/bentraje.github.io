import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

import Japannotes from '@/notes/jpfaq.mdx'
import ReactMarkdown from "react-markdown";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ben Traje",
  description: "3D Technical Artist",
};


export default function Page() {
  return (

      <div
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-xl mx-4 mt-8 lg:mx-auto`}
      >
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 font-[family-name:var(--font-geist-sans)]">
          <div>
            {/* <h1 className="mb-8 text-2xl font-semibold tracking-tighter font-[family-name:var(--font-geist-sans)]">
              Japan 2025  🗻🏮
            </h1> */}

            <div className="prose leading-snug [&_ul]:leading-none [&_ol]:leading-none">
            <Japannotes />
            </div>
 
 
            </div>
        </main>

      </div>
  
  );
}


