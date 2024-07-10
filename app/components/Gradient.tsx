const Gradient = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 max-w-screen max-h-screen overflow-hidden blur-[10px] brightness-[50%]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
        width="1920"
        height="1080"
        className="aspect-auto min-w-screen min-h-screen w-screen h-screen"
      >
        <defs>
          <linearGradient
            gradientTransform="rotate(-248, 0.5, 0.5)"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="gggrain-gradient2"
          >
            <stop
              stopColor="hsla(194, 31%, 14%, 1.00)"
              stopOpacity="1"
              offset="-0%"
            ></stop>
            <stop
              stopColor="rgba(255,255,255,0)"
              stopOpacity="0"
              offset="100%"
            ></stop>
          </linearGradient>
          <linearGradient
            gradientTransform="rotate(248, 0.5, 0.5)"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="gggrain-gradient3"
          >
            <stop stopColor="hsl(227, 61%, 12%)" stopOpacity="1"></stop>
            <stop
              stopColor="rgba(255,255,255,0)"
              stopOpacity="0"
              offset="100%"
            ></stop>
          </linearGradient>
          <filter
            id="gggrain-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.55"
              numOctaves="2"
              seed="109"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence"
            ></feTurbulence>
            <feColorMatrix
              type="saturate"
              values="0"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="turbulence"
              result="colormatrix"
            ></feColorMatrix>
            <feComponentTransfer
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="colormatrix"
              result="componentTransfer"
            >
              <feFuncR type="linear" slope="3"></feFuncR>
              <feFuncG type="linear" slope="3"></feFuncG>
              <feFuncB type="linear" slope="3"></feFuncB>
            </feComponentTransfer>
            <feColorMatrix
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="componentTransfer"
              result="colormatrix2"
              type="matrix"
              values="1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 19 -11"
            ></feColorMatrix>
          </filter>
        </defs>
        <g>
          <rect width="100%" height="100%" fill="hsl(0, 9%, 37%)"></rect>
          <rect
            width="100%"
            height="100%"
            fill="url(#gggrain-gradient3)"
          ></rect>
          <rect
            width="100%"
            height="100%"
            fill="url(#gggrain-gradient2)"
          ></rect>
          <rect
            width="100%"
            height="100%"
            fill="transparent"
            filter="url(#gggrain-filter)"
            opacity="1"
            style={{ mixBlendMode: "soft-light" }}
          ></rect>
        </g>
      </svg>
    </div>
  );
};

export default Gradient;
