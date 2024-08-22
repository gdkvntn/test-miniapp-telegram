// StarryBackground.js
import React, { useState, useEffect } from "react";

const generateStar = () => ({
  top: `${Math.random() * 100}vh`,
  left: `${Math.random() * 100}vw`,
  opacity: Math.random(),
});

const StarryBackground = () => {
  const [stars, setStars] = useState([]);
  const totalStars = 100;
  const intervalTime = 100;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (stars.length < totalStars) {
        setStars((prevStars) => [...prevStars, generateStar()]);
      }
    }, intervalTime);

    return () => clearInterval(intervalId);
  }, [stars]);

  return (
    <div className="stars">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            opacity: star.opacity,
            animationDelay: `${Math.random() * 5}s`, // Добавляет случайную задержку для анимации
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground;
