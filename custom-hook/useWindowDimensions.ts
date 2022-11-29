import { useEffect, useState } from "react";

type WindowDimensions = { width: number; height: number };

const getWindowDimensions = (): WindowDimensions => {
  const { innerWidth: width, innerHeight: height } = global;
  return {
    width,
    height,
  };
};

const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [global]);

  return windowDimensions;
};

export default useWindowDimensions;
