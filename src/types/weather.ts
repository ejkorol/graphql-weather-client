export type WeatherCode =
  | 0 // Clear sky
  | 1
  | 2
  | 3 // Cloudy
  | 45
  | 48 // Fog
  | 51
  | 53
  | 55 // Drizzle
  | 56
  | 57 // Freezing Drizzle
  | 61
  | 63
  | 65 // Rain
  | 66
  | 67 // Freezing Rain
  | 71
  | 73
  | 75 // Snow
  | 77 // Snow Grains
  | 80
  | 81
  | 82 // Rain Showers
  | 85
  | 86 // Snow Showers
  | 95 // Thunderstorm
  | 96
  | 99; // Thunderstorm with hail

export type WeatherVerboise =
  | "sunny"
  | "cloudy"
  | "foggy"
  | "rainy"
  | "snowy"
  | "thunderstorm"
  | "hail";

interface CurrentWeather {
  weather_code: WeatherCode;
  wind_gusts_10m: number;
  temperature_2m: number;
  relative_humidity_2m: number;
  precipitation_probability: 56;
}

export interface DailyWeather {
  temperatureMax: number[];
  temperatureMin: number[];
  weatherCode: WeatherCode[];
}

export interface Weather {
  current: CurrentWeather;
  daily: DailyWeather;
}
