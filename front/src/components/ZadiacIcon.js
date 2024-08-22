import React from "react";
import { zodiac } from "../data/data";

const ZodiacIcon = ({ sign, altText, width = 24, height = 24 }) => {
  const iconUrl = zodiac[sign];

  return (
    <img
      className={`block border-2 `}
      src={iconUrl}
      alt={altText}
      width={width}
      height={height}
    />
  );
};

export default ZodiacIcon;
