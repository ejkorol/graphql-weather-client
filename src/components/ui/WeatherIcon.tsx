import {
  Sun,
  Cloudy,
  CloudDrizzle,
  CloudSnow,
  CloudFog,
  CloudLightning,
  CloudHail,
} from "lucide-react";
import { WeatherCode, WeatherVerboise } from "@/types";
import getWeather from "@/utils/getWeather";

interface WeatherIconProps {
  weatherCode: WeatherCode;
}

const iconOptions = {
  size: 32,
  color: "#bdbdbd",
};

const weatherIconMap: Record<WeatherVerboise, JSX.Element> = {
  sunny: <Sun {...iconOptions} />,
  cloudy: <Cloudy {...iconOptions} />,
  foggy: <CloudFog {...iconOptions} />,
  rainy: <CloudDrizzle {...iconOptions} />,
  snowy: <CloudSnow {...iconOptions} />,
  thunderstorm: <CloudLightning {...iconOptions} />,
  hail: <CloudHail {...iconOptions} />,
};

const WeatherIcon = ({ weatherCode }: WeatherIconProps) => {
  const weatherType = getWeather(weatherCode);
  return <>{weatherIconMap[weatherType]}</>;
};

export { WeatherIcon };
