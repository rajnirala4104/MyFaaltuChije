import React, { useEffect, useState } from "react";
import WorldMap from "react-svg-worldmap";

function WorldMapComponent() {
  const inAddress =
    ",Ground Floor, B-1,2,3 Hanumanta Appartment, SRA CHS Ltd., M C Chhagla Marg, Vile Parle (East), Mumbai-400099";
  const mzAddress =
    ",Ground Floor, B-1,2,3 Hanumanta Appartment, SRA CHS Ltd., M C Chhagla Marg, Vile Parle (East), Mumbai-400099";
  const data = [
    { country: "in", value: inAddress, coordinates: [70.9629, 16.5937] },
    { country: "mz", value: mzAddress, coordinates: [38.5296, -2.6657] },
  ];

  const mapWidth = 1061;
  const mapHeight = 700;

  const [size, setSize] = useState(
    window.innerWidth < 1050 ? "responsive" : 1050
  );
  const [adjustedScale, setAdjustedScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1050) {
        setSize("responsive");
        setAdjustedScale(window.innerWidth / 1050);
      } else {
        setSize(1050);
        setAdjustedScale(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const customStyle = (context) => {
    const isSelected = data.some(
      (d) => d.country === context.countryCode.toLowerCase()
    );
    return {
      fill: isSelected ? "#3D3E41" : "#81BC06",
      stroke: "#E6F6FD",
    };
  };

  const coordinatesToPercentage = ([longitude, latitude]) => {
    const xPercentage = ((longitude + 180) / 360) * 100;
    const yPercentage = ((90 - latitude) / 120) * 100;

    if (size === "responsive") {
      return [xPercentage * adjustedScale, yPercentage * adjustedScale];
    }
    return [xPercentage, yPercentage];
  };

  return (
    <div
      className="flex items-center justify-center w-full"
      style={{
        position: "relative",
        width: size === "responsive" ? "100%" : `${mapWidth}px`,
        height: size === "responsive" ? "auto" : `${mapHeight}px`,
        overflow: "hidden",
      }}
    >
      <WorldMap size={size} data={data} styleFunction={customStyle} />
      {data.map((item, index) => {
        const [x, y] = coordinatesToPercentage(item.coordinates);
        return (
          <div
            key={index}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -100%)",
              pointerEvents: "none",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C8.686 2 6 4.686 6 8C6 13 12 22 12 22C12 22 18 13 18 8C18 4.686 15.314 2 12 2ZM12 10.5C10.619 10.5 9.5 9.381 9.5 8C9.5 6.619 10.619 5.5 12 5.5C13.381 5.5 14.5 6.619 14.5 8C14.5 9.381 13.381 10.5 12 10.5Z"
                fill="#F35325"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
}

export default WorldMapComponent;
