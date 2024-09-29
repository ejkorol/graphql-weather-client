"use server";
import { Weather } from "@/types";

const apiUrl = process.env.API_URL;

if (!apiUrl) {
  throw new Error("API_URL is not defined in the environment variables.");
}

export const getWeather = async (
  latitude: number,
  longitude: number,
): Promise<Weather> => {
  const query = `
  query getWeather($latitude: Float!, $longitude: Float!) {
    weather(latitude: $latitude, longitude: $longitude) {
      current {
        weather_code
        wind_gusts_10m
        temperature_2m
        relative_humidity_2m
        precipitation_probability
      }
      daily {
        temperatureMax
        temperatureMin
        weatherCode
      }
    }
  }
  `;

  const variables = { latitude, longitude };

  try {
    const res = await fetch(apiUrl as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });

    const { data } = await res.json();

    if (!res.ok) {
      throw new Error(
        `Failed to fetch weather: ${res.status} ${res.statusText}`,
      );
    }

    return data.weather;
  } catch (error) {
    throw new Error(`Error fetching weather: ${error}`);
  }
};
