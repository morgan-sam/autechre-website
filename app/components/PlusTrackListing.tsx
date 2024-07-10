"use client";
export const runtime = "edge";

import localFont from "next/font/local";

const AminaFont = localFont({ src: "../../public/fonts/Amina-Medium.woff2" });

const plusInfo = [
  ["DekDre Scap B", "A1"],
  ["7FM ic", "A2"],
  ["marhide", "A3"],
  ["ecol4", "B1"],
  ["lux 106 mod", "C1"],
  ["X4", "C2"],
  ["ii.pre esc", "D1"],
  ["esle 0", "D2"],
  ["TM1 open", "D3"],
  [null],
  ["warp lp 338"],
  ["( lc ) 02070"],
  ["0801061033811"],
];
import { useState, useEffect } from "react";

type PlusTrackListingProps = {
  opacity: number;
  onMobile: boolean;
};

const PlusTrackListing: React.FC<PlusTrackListingProps> = ({
  opacity,
  onMobile,
}) => {
  const [info, setInfo] = useState(plusInfo);
  return (
    <ol
      style={{ opacity: onMobile ? 0.25 : opacity }}
      className={`fixed bottom-0 right-0 flex flex-col m-2 opacity-25 md:opacity-100 duration-100`}
      dir="rtl"
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

export default PlusTrackListing;
