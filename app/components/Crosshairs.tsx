export const runtime = "edge";

interface CrosshairsProps {
  position: {
    x: number;
    y: number;
  };
}

const Crosshairs: React.FC<CrosshairsProps> = ({ position }) => {
  return (
    <>
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
    </>
  );
};

export default Crosshairs;
