export const runtime = "edge";
import Countdown from "@/app/components/Countdown";

interface BottomLeftInfoProps {
  position: {
    x: number;
    y: number;
  };
}

const BottomLeftInfo: React.FC<BottomLeftInfoProps> = ({ position }) => {
  return (
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
  );
};

export default BottomLeftInfo;
