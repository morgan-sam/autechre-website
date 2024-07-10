export const runtime = "edge";

interface TopRightTitlesProps {
  position: {
    x: number;
    y: number;
  };
  hoveredAlbum: string;
}

const TopRightTitles: React.FC<TopRightTitlesProps> = ({
  position,
  hoveredAlbum,
}) => {
  return (
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
  );
};

export default TopRightTitles;
