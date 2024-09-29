"use server";

const apiUrl = process.env.API_URL;

export const getWeather = async (latitude: number, longitude: number) => {
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

  const res = await fetch(apiUrl as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  const { data } = await res.json();
  return data.weather;
};
