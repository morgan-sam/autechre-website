"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import PlusTrackListing from "@/app/components/PlusTrackListing";
import SignTrackListing from "@/app/components/SignTrackListing";
import Gradient from "@/app/components/Gradient";

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
    <main className="flex min-h-screen flex-col items-center pt-24 bg-[#48494b] overflow-hidden cursor-none">
      <Gradient />
      <PlusTrackListing />
      <SignTrackListing />
      <div className="absolute bottom-0 left-0 m-2">
        <p className="font-mono text-white">
          MOUSE X: {position.x >= 10 ? null : "0"}
          {position.x.toFixed(2)}%
        </p>
        <p className="font-mono text-white">
          MOUSE Y: {position.y >= 10 ? null : "0"}
          {position.y.toFixed(2)}%
        </p>
      </div>

      <div className="relative z-[10] flex place-items-center flex-col pt-[10rem]">
        <Image
          style={
            {
              // filter: `hue-rotate(${(position.y - 50) * 3.6}deg)`,
            }
          }
          className="absolute"
          src="/sign.svg"
          alt="SIGN Logo"
          width={300}
          height={300}
          priority
        />
        <Image
          style={{
            // filter: `hue-rotate(${(position.y - 50) * 3.6}deg)`,
            opacity: `${position.x}%`,
          }}
          className="relative"
          src="/plus.svg"
          alt="PLUS Logo"
          width={300}
          height={300}
          priority
        />
      </div>

      <Image
        className="relative invert pt-[3rem]"
        src="/logo.svg"
        alt="AUTECHRE Logo"
        width={300}
        height={300}
        priority
      />

      <div className="pt-[2rem] mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-2xl lg:grid-cols-5">
        <h2 className="mb-3 text-2xl font-semibold text-white">SIGN</h2>
        <h2 className="mb-3 text-2xl font-semibold text-white">/</h2>
        <h2 className="mb-3 text-2xl font-semibold text-white">AUTECHRE</h2>
        <h2 className="mb-3 text-2xl font-semibold text-white">/</h2>
        <h2 className="mb-3 text-2xl font-semibold text-white">PLUS</h2>
      </div>

      <div
        style={{
          top: `${position.y}%`,
        }}
        id="crosshair-x"
        className="select-none z-[100] left-0 absolute w-screen	h-[1px] bg-white"
      ></div>
      <div
        style={{
          left: `${position.x}%`,
        }}
        id="crosshair-y"
        className="select-none z-[100] top-0 absolute w-[1px] h-screen	bg-white"
      ></div>
    </main>
  );
}
