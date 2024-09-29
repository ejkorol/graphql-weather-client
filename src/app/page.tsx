import LocationInput from "@/components/LocationInput";
import { LottieAnimation } from "@/components/ui";
import {
  WeatherWeekday,
  WeatherCurrent,
  WeatherStat,
} from "@/components/weather";
import { getWeather } from "@/services/weatherService";
import { getCities } from "@/services/locationService";
import * as motion from "framer-motion/client";

/**
 * This function maps over the days to return a weekday
 * based on the offset given from an index of a map method.
 * */
const getWeekday = (offset: number) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[(new Date().getDay() + offset) % 7];
};

interface SearchParams {
  latitude?: string;
  longitude?: string;
  city?: string;
}

const Home = async ({ searchParams }: { searchParams: SearchParams }) => {
  /**
   * Default paramaters for initial page load if there
   * are no search params present in the url.
   *
   * Search params are set in the LocationInput client component.
   *
   * Once search params are set, it will trigger a re-render of the initial page.
   * */
  let latitude = 49.2827;
  let longitude = -123.1207;
  let city = "Vancouver";

  if (searchParams) {
    latitude = searchParams.latitude
      ? parseFloat(searchParams.latitude)
      : latitude;
    longitude = searchParams.longitude
      ? parseFloat(searchParams.longitude)
      : longitude;
    city = searchParams.city || city;
  }

  /**
   * Fetch data based on default parameters.
   * */
  const weather = await getWeather(latitude, longitude);
  const cities = await getCities("CA");

  const {
    current: {
      weather_code,
      temperature_2m,
      wind_gusts_10m,
      precipitation_probability,
      relative_humidity_2m,
    },
    daily: { temperatureMax, temperatureMin, weatherCode },
  } = weather;

  return (
    <section className="bg-light dark:bg-dark flex flex-col gap-32 items-center justify-center h-svh w-full">
      <motion.div
        initial={{ opacity: -1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.25, duration: 1, ease: "easeInOut" }}
      >
        <LocationInput city={city} cities={cities} weatherCode={weather_code} />
      </motion.div>

      <motion.div
        initial={{ opacity: -1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
        className="flex flex-col items-center md:flex-row gap-16 w-full"
      >
        <div className="w-full md:w-1/3 flex items-center justify-center md:justify-end">
          <LottieAnimation weatherCode={weather_code} />
        </div>

        <div className="w-1/3 flex flex-col gap-6 items-center justify-center">
          <WeatherCurrent
            currentTemperature={temperature_2m}
            minTemperature={temperatureMin[0]}
            maxTemperature={temperatureMax[0]}
          />
        </div>

        <div className="w-full md:w-1/3 flex md:flex-col md:gap-6 items-center md:justify-start">
          <WeatherStat type="wind" value={wind_gusts_10m} />
          <WeatherStat type="percipitation" value={precipitation_probability} />
          <WeatherStat type="humidity" value={relative_humidity_2m} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: -1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.25, duration: 1, ease: "easeInOut" }}
        className="w-full flex flex-row justify-around md:gap-16 md:justify-center"
      >
        {/*
         * The slice method on the weatherCode is to render only
         * the next 4 days of the weather data, excluding the current day.
         */}
        {weatherCode.slice(1, 5).map((code, idx) => (
          <WeatherWeekday
            key={idx}
            weatherCode={code}
            temperature={{
              max: temperatureMax[idx + 1],
              min: temperatureMin[idx + 1],
            }}
            weekday={getWeekday(idx + 1)}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Home;
