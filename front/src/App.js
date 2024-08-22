import React, { useEffect, useState } from "react";
import axios from "axios";
import StarryBackground from "./components/StarryBg";
import { ZadiacList } from "./components/ZadiacList";
import ZodiacDetails from "./components/ZadiacDetails";
import { zadiacLang } from "./data/data";

const App = () => {
  const [isLanguage, setIsLanguage] = useState("en");
  const [signData, setSignData] = useState({});
  const [selectedSign, setSelectedSign] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getSign = async (sign, period) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        "https://poker247tech.ru/get_horoscope/",
        {
          sign: sign,
          language: isLanguage === "en" ? "translated" : "original",
          period: period,
        }
      );

      setSignData(data || "Описание не найдено");
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching horoscope:", err);
      setIsLoading(false);
    }
  };

  const handleSelectSign = (sign, period) => {
    setSelectedSign(sign);
    getSign(sign, period);
  };

  const handleBack = () => {
    setSelectedSign(null);
  };

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;
      const userLanguage = webApp.initDataUnsafe?.user?.language_code;

      if (userLanguage !== "ru") {
        setIsLanguage("en");
      } else {
        setIsLanguage(userLanguage);
      }
    }
  }, []);

  const handleChangeLanguageInSelect = (e) => {
    setIsLanguage(e.target.value);
  };

  useEffect(() => {
    if (signData.sign) {
      getSign(signData.sign, signData.period);
    }
  }, [isLanguage]);

  return (
    <div className=" p-5 text-center">
      <StarryBackground />
      <div className="flex justify-between">
        <h1 className=" text-xl font-bold mb-5">
          {zadiacLang[isLanguage]["horoscope"]}
        </h1>
        <select
          value={isLanguage || "ru"}
          onChange={(e) => handleChangeLanguageInSelect(e)}
          className="p-1 mb-5 w-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="ru">ru</option>
          <option value="en">en</option>
        </select>
      </div>

      {!selectedSign ? (
        <ZadiacList
          handleSelectSign={handleSelectSign}
          isLanguage={isLanguage}
        />
      ) : (
        <ZodiacDetails
          description={signData.horoscope}
          selectedSign={selectedSign}
          onBack={handleBack}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default App;
