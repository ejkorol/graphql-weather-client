interface WeatherCurrentProps {
  currentTemperature: number;
  minTemperature: number;
  maxTemperature: number;
}

const WeatherCurrent = ({
  currentTemperature,
  minTemperature,
  maxTemperature,
}: WeatherCurrentProps) => {
  return (
    <>
      <h3 className="text-9xl font-extralight tracking-tight text-dark dark:text-light">
        {currentTemperature}
      </h3>
      <p className="text-base font-light tracking-wider text-grayLight">
        {minTemperature}° / {maxTemperature}°
      </p>
    </>
  );
};

export { WeatherCurrent };
