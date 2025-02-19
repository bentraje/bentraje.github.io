"use client";

import Image from "next/image";
import PortfolioMenu from "@/components/PortfolioGallery";
import Link from "next/link"
import Navbar from "@/components/Navbar";
import Japannotes from '@/notes/jpfaq.mdx'


export default function Home() {
  return (
    <div className="flex w-full flex-col">

      <main className="container mx-auto px-4">
        {/* <div className="prose font-[family-name:var(--font-geist-sans)]">
      <Japannotes />
      </div> */}
        <PortfolioMenu />
      </main>
    </div>
  );
}
