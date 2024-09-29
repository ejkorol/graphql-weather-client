"use client";

import dynamic from "next/dynamic";
import { LottieRefCurrentProps } from "lottie-react";
import themeButton from "@/lottie/dark-light.json";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    theme === "light"
      ? lottieRef.current?.setDirection(1)
      : lottieRef.current?.setDirection(-1);
  }, [theme]);

  const handleInitialLoad = () => {
    if (theme === "light") {
      lottieRef.current?.goToAndStop(16, true);
    } else {
      lottieRef.current?.goToAndStop(0, true);
    }
  };

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    lottieRef.current?.play();
    setTheme(newTheme);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, ease: "easeInOut" }}
      className="fixed right-0 top-0 p-8"
    >
      <Lottie
        lottieRef={lottieRef}
        onDOMLoaded={handleInitialLoad}
        onClick={handleThemeToggle}
        style={{ width: "80px" }}
        className="cursor-pointer"
        animationData={themeButton}
        autoplay={true}
        loop={false}
      />
    </motion.div>
  );
};

export { ThemeSwitcher };
