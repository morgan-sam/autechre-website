"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import PlusTrackListing from "@/app/components/PlusTrackListing";
import SignTrackListing from "@/app/components/SignTrackListing";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event: any) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#48494b]">
      <PlusTrackListing />
      <div className="relative z-[10] flex place-items-center flex-col">
        <Image
          className="relative hue-rotate"
          src="/plus.svg"
          alt="PLUS Logo"
          width={600}
          height={600}
          priority
        />
      </div>
      <SignTrackListing />

      <div>
        <p className="font-mono text-white">
          Mouse X: {position.x >= 10 ? null : "0"}
          {position.x.toFixed(2)}%
        </p>
        <p className="font-mono text-white">
          Mouse Y: {position.y >= 10 ? null : "0"}
          {position.y.toFixed(2)}%
        </p>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-2xl lg:grid-cols-5">
        <h2 className="mb-3 text-2xl font-semibold text-white">SIGN</h2>
        <h2 className="mb-3 text-2xl font-semibold text-white">/</h2>
        <h2 className="mb-3 text-2xl font-semibold text-white">AUTECHRE</h2>
        <h2 className="mb-3 text-2xl font-semibold text-white">/</h2>
        <h2 className="mb-3 text-2xl font-semibold text-white">PLUS</h2>
      </div>
    </main>
  );
}
