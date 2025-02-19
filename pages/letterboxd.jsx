"use client";

import "@/app/globals.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Inter } from "next/font/google";
import { DM_Serif_Text } from "next/font/google";
import { useState } from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'  // for GitHub Flavored Markdown support

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif-text",
  style: "italic",
});

const inter = Inter({ subsets: ["latin"] });

export default function BlackDotGridBackground() {
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponse("");
    setIsActive(true);

    console.log(`${process.env.NEXT_PUBLIC_API_URL}/mergedletterboxdfilms`);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mergedletterboxdfilms`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let done = false;

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunk = decoder.decode(value);
          try {
            const jsonChunk = chunk
              .split("\n")
              .filter((line) => line.trim().startsWith("data:"))
              .map((line) => JSON.parse(line.replace("data: ", "").trim()));

            const content = jsonChunk
              .map((chunkObj) => chunkObj.content)
              .join("");
            setResponse((prev) => prev + content);
          } catch (err) {
            console.error("Error parsing chunk", err);
          }
        }
      }
    } catch (error) {
      console.error("Streaming error:", error);
      setResponse("Error: Unable to fetch streaming data");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10px 10px, rgba(255, 255, 255, 0.25) 2.0px, transparent 0)
          `,
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(circle at 50% 50%, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 50%, black 30%, transparent 70%)",
        }}
      />
      <div
        className={`relative z-10 flex flex-col items-center ${inter.className}`}
      >
        <div className="container mx-auto p-8 mt-32 text-white text-center">
          <div className="w-full max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">
              What Your Letterboxd Tells About You
            </h1>
            <form
              onSubmit={handleSubmit}
              className="relative w-full max-w-sm mx-auto"
            >
              <Input
                type="text"
                placeholder="Insert Your Letterboxd Profile"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="h-10 pl-4 pr-12 text-white placeholder:text-white/60 rounded-full bg-gradient-to-r from-[#0fb137] to-[#00c030] border-0 focus-visible:ring-2 focus-visible:ring-white/20"
              />
              <Button
                size="icon"
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-transparent hover:bg-white/10"
              >
                {isLoading ? (
                  <div className="loader h-4 w-4 border-2 border-t-white border-white/30 rounded-full animate-spin" />
                ) : (
                  <ArrowRight className="h-4 w-4 text-white" />
                )}
              </Button>
            </form>
            {isActive && (
              <div className="mt-10">
                <div className="text-black p-4 bg-gray-100 rounded-md whitespace-pre-wrap min-h-[200px] w-full">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {response || "Checking your letterboxd..."}
                  </ReactMarkdown>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
