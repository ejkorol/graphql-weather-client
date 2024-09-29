import { WeatherIcon } from "@/components/ui";
import { WeatherCode } from "@/types";

interface Temperature {
  min: number;
  max: number;
}

interface WeatherWeekdayProps {
  weatherCode: WeatherCode;
  temperature: Temperature;
  weekday: string;
}

const WeatherWeekday = ({
  weatherCode,
  temperature,
  weekday,
}: WeatherWeekdayProps) => {
  return (
    <div className="md:w-full flex flex-col gap-4 items-center">
      <WeatherIcon weatherCode={weatherCode} />
      <h4 className="text-3xl flex font-extralight text-grayLight tracking-tight">
        {temperature.min}°
        <span className="hidden md:flex"> / {temperature.max}°</span>
      </h4>
      <p className="text-sm uppercase font-medium text-grayLight tracking-wide">
        {weekday}
      </p>
    </div>
  );
};

export { WeatherWeekday };
