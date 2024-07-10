"use client";

import localFont from "next/font/local";

const AminaFont = localFont({ src: "../../public/fonts/Amina-Medium.woff2" });

const signInfo = [
  ["M4 Lema", "A1"],
  ["F7", "A2"],
  ["si00", "B1"],
  ["esc desc", "B2"],
  ["au14", "B3"],
  ["Metaz form8", "C1"],
  ["sch.mefd 2", "C2"],
  ["gr4", "C3"],
  ["th red a", "D1"],
  ["psin AM", "D2"],
  ["r cazt", "D3"],
  [null],
  ["warp lp 329"],
  ["( lc )02070"],
  ["0801061032913"],
];

import { useState, useEffect } from "react";

type SignTrackListingProps = {
  opacity: number;
};

const SignTrackListing: React.FC<SignTrackListingProps> = ({ opacity }) => {
  const [info, setInfo] = useState(signInfo);
  return (
    <ol
      style={{ opacity: opacity }}
      className={`fixed top-0 left-0 flex flex-col m-2 opacity-25 md:opacity-100 md:mt-2 duration-100`}
    >
      {info.map((el, i) =>
        el[0] != null ? (
          <li
            key={i}
            className={`${AminaFont.className} relative leading-[18px]`}
          >
            <span className="text-white text-[20px] tracking-[1px]">
              {el[0]}
            </span>
            {el.length > 1 ? (
              <span className="text-stone-500 absolute mx-1 text-[10px] tracking-[1px] top-[-4px] text-nowrap	">
                ( {el[1]} )
              </span>
            ) : (
              <br />
            )}
          </li>
        ) : (
          <br key={i} />
        )
      )}
    </ol>
  );
};

export default SignTrackListing;
