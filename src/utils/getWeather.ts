import { WeatherCode, WeatherVerboise } from "@/types";

const weatherMap: Record<WeatherCode, WeatherVerboise> = {
  0: "sunny",
  1: "cloudy",
  2: "cloudy",
  3: "cloudy",
  45: "foggy",
  48: "foggy",
  51: "rainy",
  53: "rainy",
  55: "rainy",
  56: "rainy",
  57: "rainy",
  61: "rainy",
  63: "rainy",
  65: "rainy",
  66: "rainy",
  67: "rainy",
  71: "snowy",
  73: "snowy",
  75: "snowy",
  77: "snowy",
  80: "rainy",
  81: "rainy",
  82: "rainy",
  85: "snowy",
  86: "snowy",
  95: "thunderstorm",
  96: "hail",
  99: "hail",
};

/**
 * This function converts the weather code returned by the api
 * into human-friendly/verboise weather conditions defined in the types.
 *
 * These will be used to render icons and images based on the weather
 * conditions.
 * */
const getWeather = (weatherCode: WeatherCode): WeatherVerboise => {
  return weatherMap[weatherCode];
};

export default getWeather;
