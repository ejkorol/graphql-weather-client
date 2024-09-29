"use client";

import { useState } from "react";
import { WeatherCode, Cities, City } from "@/types";
import getWeather from "@/utils/getWeather";

interface LocationInputProps {
  weatherCode: WeatherCode;
  cities: Cities;
  city: string;
}

const LocationInput = ({ weatherCode, cities, city }: LocationInputProps) => {
  const [inputValue, setInputValue] = useState<string>(city);

  const weatherType = getWeather(weatherCode);

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim().length < 3) {
      return;
    }

    const exactMatch = cities.find(
      (city: City) => city.name.toLowerCase() === value.toLowerCase(),
    );

    /**
     * To ensure a smooth animation, a quick timeout is set before setting URL params
     * as this will delay a trigger on the re-render.
     * */
    if (exactMatch) {
      setTimeout(() => {
        window.location.search = `?latitude=${exactMatch.latitude}&longitude=${exactMatch.longitude}&city=${exactMatch.name}`;
      }, 150);
    }
  };

  return (
    <h1 className="text-3xl font-extralight text-grayLight">
      Right now in{" "}
      <input
        value={inputValue}
        onChange={handleCountryChange}
        type="text"
        className="text-center border-b border-b-2 border-grayLight focus:outline-none mx-2 font-light bg-transparent tracking-tight placeholder:text-dark dark:placeholder:text-light text-dark dark:text-light"
        style={{
          width: `${Math.max(inputValue.length, 4)}ch`,
          transition: "width 0.3s ease",
          minWidth: "4ch",
          maxWidth: "25ch",
        }}
      />
      , it's {weatherType}.
    </h1>
  );
};

export default LocationInput;
