import React from "react";

import styled from "@emotion/styled";

import { ReactComponent as AirFlowIcon } from "./images/airFlow.svg";
import { ReactComponent as RainIcon } from "./images/rainPossible.svg";
import { ReactComponent as RedoIcon } from "./images/redo.svg";
import { ReactComponent as CogIcon } from "./images/cog.svg";

import WeatherIcon from "../WeatherIcon";

const Cog = styled(CogIcon)`
  position: absolute;
  top: 30px;
  right: 15px;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

const WeatherCardWrapper = styled.div`
  position: relative;
  min-width: 360px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.backgroundColor};
  box-sizing: border-box;
  padding: 30px 15px;
`;
const Location = styled.div`
  font-size: 28px;
  color: ${({ theme }) => theme.titleColor};
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 30px;
`;
const CurrentWeather = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  svg {
    flex-basis: 40%;
    max-height: 110px;
  }
`;
const Temperature = styled.div`
  color: ${({ theme }) => theme.temperatureColor};
  font-size: 96px;
  font-weight: 300;
  display: flex;
`;
const Celsius = styled.div`
  font-weight: normal;
  font-size: 42px;
`;
const AirFlow = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 20px;

  svg {
    width: 25px;
    height: auto;
    margin-right: 30px;
  }
`;
const Rain = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};

  svg {
    width: 25px;
    height: auto;
    margin-right: 30px;
  }
`;

const Redo = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;
  font-size: 12px;
  display: inline-flex;
  align-items: flex-end;
  color: ${({ theme }) => theme.textColor};

  svg {
    margin-left: 10px;
    width: 15px;
    height: 15px;
    cursor: pointer;
    fill: ${({ theme }) => theme.textColor};
    ${({ isLoading }) =>
      isLoading ? "animation: rotate infinite 1.5s linear" : ""};
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function WeatherCard({
  weatherElement,
  fetchData,
  moment,
  setCurrentPage,
  cityName,
}) {
  const {
    observationTime,
    locationName,
    location,
    humid,
    temperature,
    description,
    weatherCode,
    rainPossibility,
    comfortability,
    windSpeed,
    isLoading,
  } = weatherElement;

  return (
    <>
      <WeatherCardWrapper>
        <Cog onClick={() => setCurrentPage("WeatherSetting")} />
        <Location>{cityName}</Location>
        <Description>
          {/* {new Intl.DateTimeFormat("zh-TW", {
    hour: "numeric",
    minute: "numeric",
  }).format(new Date(observationTime))}{" "} */}
          {description}
        </Description>
        <CurrentWeather>
          <Temperature>
            {Math.round(temperature)} <Celsius>°C</Celsius>
          </Temperature>
          <WeatherIcon
            currentWeatherCode={weatherCode}
            moment={moment || "day"}
          />
        </CurrentWeather>
        <AirFlow>
          <AirFlowIcon />
          {windSpeed} m/h
        </AirFlow>
        <Rain>
          <RainIcon />
          {Math.round(rainPossibility)}%
        </Rain>
        <Redo isLoading={isLoading}>
          最後觀測時間 :
          {new Intl.DateTimeFormat("zh-TW", {
            hour: "numeric",
            minute: "numeric",
          }).format(new Date(observationTime))}
          <RedoIcon onClick={fetchData} />
        </Redo>
      </WeatherCardWrapper>
    </>
  );
}

export default WeatherCard;
