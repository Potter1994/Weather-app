import React, { useState, useEffect, useMemo } from "react";

import { ReactComponent as DayClear } from "./components/images/day-clear.svg";
import { ReactComponent as DayCloudyFog } from "./components/images/day-cloudy-fog.svg";
import { ReactComponent as DayCloudy } from "./components/images/day-cloudy.svg";
import { ReactComponent as DayFog } from "./components/images/day-fog.svg";
import { ReactComponent as DayRain } from "./components/images/day-rain.svg";
import { ReactComponent as DaySnow } from "./components/images/day-snow.svg";
import { ReactComponent as DayThunderstorm } from "./components/images/day-thunderstorm.svg";
import { ReactComponent as DayWindy } from "./components/images/day-windy.svg";
import { ReactComponent as NightClear } from "./components/images/night-clear.svg";
import { ReactComponent as NightCloudyFog } from "./components/images/night-cloudy-fog.svg";
import { ReactComponent as NightCloudy } from "./components/images/night-cloudy.svg";
import { ReactComponent as NightFog } from "./components/images/night-fog.svg";
import { ReactComponent as NightRain } from "./components/images/night-rain.svg";
import { ReactComponent as NightSnow } from "./components/images/night-snow.svg";
import { ReactComponent as NightThunderstorm } from "./components/images/night-thunderstorm.svg";
import { ReactComponent as NightWindy } from "./components/images/night-windy.svg";

const weatherTypes = {
  isThunderstorm: [15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41],
  isClear: [1],
  isCloudyFog: [25, 26, 27, 28],
  isCloudy: [2, 3, 4, 5, 6, 7],
  isFog: [24],
  isRain: [8, 9, 9, 11, 12, 13, 14, 19, 20, 29, 30, 31, 32, 38, 39],
  isSnowing: [23, 37, 42],
};

const weatherIcons = {
  day: {
    isThunderstorm: <DayThunderstorm />,
    isClear: <DayClear />,
    isCloudyFog: <DayCloudyFog />,
    isCloudy: <DayCloudy />,
    isFog: <DayFog />,
    isRain: <DayRain />,
    isSnowing: <DaySnow />,
  },
  night: {
    isThunderstorm: <NightThunderstorm />,
    isClear: <NightClear />,
    isCloudyFog: <NightCloudyFog />,
    isCloudy: <NightCloudy />,
    isFog: <NightFog />,
    isRain: <NightRain />,
    isSnowing: <NightSnow />,
  },
};

const weatherCode2Type = (weatherCode) => {
  const [weatherType] =
    Object.entries(weatherTypes).find(([weatherType, weatherCodes]) =>
      weatherCodes.includes(Number(weatherCode))
    ) || [];
  return weatherType;
};

function WeatherIcon({ currentWeatherCode, moment }) {
  const [currentWeatherIcon, setCurrentWeatherIcon] = useState("isClear");

  const theWeatherIcon = useMemo(
    () => weatherCode2Type(currentWeatherCode),
    [currentWeatherCode]
  );

  useEffect(() => {
    setCurrentWeatherIcon(theWeatherIcon);
  }, [theWeatherIcon, moment]);

  return <>{weatherIcons[moment][currentWeatherIcon]}</>;
}

export default WeatherIcon;
