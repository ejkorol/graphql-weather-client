"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { WeatherCode, WeatherVerboise } from "@/types/index";
import getWeather from "@/utils/getWeather";

/**
 * Animated lottie files for basic weather data.
 * */
import sunny from "@/lottie/sunny.json";
import cloudy from "@/lottie/cloudy.json";
import rainy from "@/lottie/rain.json";
import sunnySnow from "@/lottie/sunny-snow.json";
import thunderStorm from "@/lottie/thunderstorm.json";
import foggy from "@/lottie/foggy.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface LottieAnimationProps {
  weatherCode: WeatherCode;
}

const LottieAnimation = ({ weatherCode }: LottieAnimationProps) => {
  const weatherType = getWeather(weatherCode);

  /**
   * Maps the human readable weather type to
   * a corresponding lottie file.
   * */
  const animationMap: Record<WeatherVerboise, any> = {
    sunny: sunny,
    cloudy: cloudy,
    foggy: foggy,
    rainy: rainy,
    snowy: sunnySnow,
    thunderstorm: thunderStorm,
    hail: thunderStorm,
  };

  const animationData = animationMap[weatherType];

  return (
    <motion.div
      initial={{ opacity: -1 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.5,
        duration: 1.25,
        ease: "easeOut",
        type: "spring",
      }}
    >
      <Lottie animationData={animationData} />
    </motion.div>
  );
};

export { LottieAnimation };
