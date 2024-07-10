// components/MousePosition.js
"use client";

import { useState, useEffect } from "react";

const MousePosition = () => {
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
    <div>
      <p className="text-white">Mouse X: {position.x.toFixed(2)}%</p>
      <p className="text-white">Mouse Y: {position.y.toFixed(2)}%</p>
    </div>
  );
};

export default MousePosition;
