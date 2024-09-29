import { Wind, Umbrella, Droplet } from "lucide-react";

type StatType = "wind" | "percipitation" | "humidity";

interface WeatherStatProps {
  type: StatType;
  value: number;
}

const iconStyles = {
  size: 32,
  strokeWidth: 2,
  color: "#bdbdbd",
};

const renderIcon = (type: StatType): React.ReactElement => {
  switch (type) {
    case "wind":
      return <Wind {...iconStyles} />;
    case "percipitation":
      return <Umbrella {...iconStyles} />;
    case "humidity":
      return <Droplet {...iconStyles} />;
  }
};

const renderStat = (type: StatType): String => {
  switch (type) {
    case "wind":
      return "mph";
    case "percipitation":
      return "%";
    case "humidity":
      return "%";
  }
};

const WeatherStat = ({ type, value }: WeatherStatProps) => {
  return (
    <div className="w-full flex items-center gap-4 justify-center md:justify-start">
      {renderIcon(type)}
      <h4 className="text-5xl font-light tracking-tight text-gray">
        {value}{" "}
        <span className="text-base font-light tracking-wide text-grayLight">
          {renderStat(type)}
        </span>
      </h4>
    </div>
  );
};

export { WeatherStat };
