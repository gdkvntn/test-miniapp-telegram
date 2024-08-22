import React, { useEffect } from "react";
import { zadiacLang, zodiac } from "../data/data";
import { Card } from "./Card";

export const ZadiacList = ({ isLanguage, handleSelectSign }) => {
  useEffect(() => {
    const backButton = window.Telegram.WebApp.BackButton;
    backButton.hide();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {" "}
      {isLanguage &&
        Object.keys(zodiac).map((item) => {
          return (
            <Card
              isLanguage={isLanguage}
              handleSelectSign={handleSelectSign}
              key={item}
              name={zadiacLang[isLanguage][item]}
              sign={item}
            />
          );
        })}
    </div>
  );
};
