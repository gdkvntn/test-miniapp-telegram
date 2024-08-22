import React, { useEffect } from "react";
import { Spinner } from "./Spinner";
import { useSwipeable } from "react-swipeable";

const ZodiacDetails = ({ selectionSign, description, onBack, isLoading }) => {
  const handlers = useSwipeable({
    onSwipedRight: (eventData) => {
      if (eventData.absX > 80) {
        onBack();
      }
    },
  });

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const backButton = window.Telegram.WebApp.BackButton;
      backButton.show();
      backButton.onClick(() => onBack());
    }
  });

  return (
    <div className="zodiac-details" {...handlers}>
      {isLoading ? (
        <div className="flex w-full justify-center">
          {" "}
          <Spinner />
        </div>
      ) : (
        <>
          <h2>{selectionSign}</h2>
          <p className=" text-justify hyphens-auto">{description}</p>
        </>
      )}
    </div>
  );
};

export default ZodiacDetails;
