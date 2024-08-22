import { useState } from "react";
import ZadiacIcon from "./ZadiacIcon";
import { zadiacLang } from "../data/data";

export const Card = ({ name, handleSelectSign, sign, isLanguage }) => {
  const [select, setSelect] = useState("today");

  const handleSelectCLick = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div
      onClick={() => handleSelectSign(sign, select)}
      className=" cursor-pointer p-3 border w-28 rounded-md text-center flex flex-col  items-center bg-white/20"
    >
      {" "}
      <ZadiacIcon width={40} height={40} sign={sign} />
      <h2 className=" text-xl mb-2 mt-2">{name}</h2>
      <select
        onClick={(e) => e.stopPropagation()}
        onChange={handleSelectCLick}
        className="p-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="today">{zadiacLang[isLanguage]["today"]}</option>
        <option value="week">{zadiacLang[isLanguage]["week"]}</option>
        <option value="month">{zadiacLang[isLanguage]["month"]}</option>
        <option value="year">{zadiacLang[isLanguage]["year"]}</option>
      </select>
    </div>
  );
};
