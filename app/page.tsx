"use client";
import { useState, useEffect } from "react";

export const runtime = "edge";

import Image from "next/image";
import PlusTrackListing from "@/app/components/PlusTrackListing";
import SignTrackListing from "@/app/components/SignTrackListing";
import Gradient from "@/app/components/Gradient";
import TourList from "@/app/components/TourList";
import Countdown from "@/app/components/Countdown";

import Client from "shopify-buy";
import type { Product } from "shopify-buy";

export default function Home() {
  const [products, setProducts] = useState([] as Product[]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveredAlbum, setHoveredAlbum] = useState("");

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

  useEffect(() => {
    const client = Client.buildClient({
      domain: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || "",
      storefrontAccessToken:
        process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || "",
      apiVersion: "",
    });

    client.product.fetchAll().then((products) => {
      console.log(products);
      if (products) setProducts(products);
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center pt-4 md:pt-24 bg-[#48494b] overflow-hidden cursor-none">
      <Gradient />
      <SignTrackListing
        opacity={
          hoveredAlbum == "plus"
            ? 0.25
            : hoveredAlbum == "sign"
            ? 1
            : Math.max(0.25, 1 - position.x / 75)
        }
      />
      <PlusTrackListing
        opacity={
          hoveredAlbum == "sign"
            ? 0.25
            : hoveredAlbum == "plus"
            ? 1
            : Math.min(1, 0.25 + (position.x / 75) * 0.75)
        }
      />
      <div className="fixed bottom-0 left-0 m-2 hidden md:block">
        <p className="font-mono text-white">
          MOUSE X: {position.x >= 10 ? null : "0"}
          {position.x.toFixed(2)}%
        </p>
        <p className="font-mono text-white">
          MOUSE Y: {position.y >= 10 ? null : "0"}
          {position.y.toFixed(2)}%
        </p>
        <Countdown targetDate="2024-08-01T00:00:00" />
      </div>
      <div className="relative md:fixed top-0 right-0 m-2" dir="rtl">
        <h2 className="z-10 text-5xl font-semibold text-white tracking-[10px]">
          <span
            className="duration-100"
            style={{
              opacity:
                hoveredAlbum == "plus"
                  ? 0.25
                  : hoveredAlbum == "sign"
                  ? 1
                  : Math.max(0.25, 1 - position.x / 75),
            }}
          >
            SIGN
          </span>
          <span>/</span>
          <span
            className="duration-100"
            style={{
              opacity:
                hoveredAlbum == "sign"
                  ? 0.25
                  : hoveredAlbum == "plus"
                  ? 1
                  : Math.min(1, 0.25 + (position.x / 75) * 0.75),
            }}
          >
            PLUS
          </span>
        </h2>
        <h2 className="pt-[0.1rem] z-10 text-2xl font-semibold text-white leading-[1rem] tracking-[11px]">
          RELEASE / TOUR
        </h2>
      </div>

      <div className="relative z-[10] flex place-items-center flex-col pt-[2rem] md:pt-[10rem]">
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

      <TourList />

      <div className="flex flex-col md:flex-row gap-8 mb-40 group">
        {products.length > 0
          ? products.map((product, i) => (
              <a
                href={`https://${process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN}/products/${product.handle}`}
                className="text-white z-10 cursor-none group-hover:opacity-25 hover:!opacity-100 duration-200	"
                key={i}
                onMouseOver={() => setHoveredAlbum(product.handle)}
                onMouseLeave={() => setHoveredAlbum("")}
              >
                <Image
                  src={product.images[0].src}
                  alt={product.title}
                  width={300}
                  height={300}
                ></Image>
                <h4>{product.title}</h4>
                <h5 className="line-through">
                  {parseFloat(
                    `${product.variants[0].compareAtPrice.amount}`
                  ).toFixed(2)}{" "}
                  {product.variants[0].compareAtPrice.currencyCode}
                </h5>
                <h5>
                  {parseFloat(`${product.variants[0].price.amount}`).toFixed(2)}{" "}
                  {product.variants[0].price.currencyCode}
                </h5>
              </a>
            ))
          : null}
      </div>

      <div
        style={{
          top: `${position.y}%`,
        }}
        id="crosshair-x"
        className="select-none pointer-events-none z-[100] left-0 fixed w-screen h-[1px] bg-white"
      ></div>
      <div
        style={{
          left: `${position.x}%`,
        }}
        id="crosshair-y"
        className="select-none pointer-events-none z-[100] top-0 fixed w-[1px] h-screen	bg-white"
      ></div>
    </main>
  );
}
