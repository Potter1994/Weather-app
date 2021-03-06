import React, { useState, useEffect, useCallback } from "react";

const fetchCurrentWeather = (locationName) => {
  return fetch(
    `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=CWB-4254CE67-A508-488D-B1E9-4DAAB99A21B6&locationName=${locationName}`
  )
    .then((res) => res.json())
    .then((data) => {
      const locationData = data.records.location[0];
      const weatherElement = locationData.weatherElement.reduce(
        (neededElements, item) => {
          if (["WDSD", "TEMP", "HUMD"].includes(item.elementName)) {
            neededElements[item.elementName] = item.elementValue;
          }
          return neededElements;
        },
        {}
      );
      return {
        observationTime: locationData.time.obsTime,
        locationName: locationData.parameter[0].parameterValue,
        location: locationData.locationName,
        temperature: weatherElement.TEMP,
        windSpeed: weatherElement.WDSD,
        humid: weatherElement.HUMD,
      };

      // console.log(locationData);
    });
};

const fetchWeatherForecast = (cityName) => {
  return fetch(
    `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-4254CE67-A508-488D-B1E9-4DAAB99A21B6&locationName=${cityName}`
  )
    .then((res) => res.json())
    .then((data) => {
      const locationData = data.records.location[0];
      const weatherElements = locationData.weatherElement.reduce(
        (neededElements, item) => {
          if (["Wx", "PoP", "CI"].includes(item.elementName)) {
            neededElements[item.elementName] = item.time[0].parameter;
          }
          return neededElements;
        },
        {}
      );

      return {
        description: weatherElements.Wx.parameterName,
        weatherCode: weatherElements.Wx.parameterValue,
        rainPossibility: weatherElements.PoP.parameterName,
        comfortability: weatherElements.CI.parameterName,
      };
    });
};

const useWeatherApi = (currentLocation) => {
  const { locationName, cityName } = currentLocation;
  const [weatherElement, setWeatherElement] = useState({
    observationTime: new Date(),
    humid: 0,
    temperature: 0,
    description: "",
    weatherCode: 0,
    rainPossibility: 0,
    comfortability: "",
    windSpeed: 0,
    isLoading: true,
  });

  const fetchData = useCallback(() => {
    const fetchingData = async () => {
      const [currentWeather, weatherForecast] = await Promise.all([
        fetchCurrentWeather(locationName),
        fetchWeatherForecast(cityName),
      ]);
      setWeatherElement({
        ...currentWeather,
        ...weatherForecast,
        isLoading: false,
      });
    };
    setWeatherElement((prevState) => ({
      ...prevState,
      isLoading: true,
    }));
    fetchingData();
  }, [locationName, cityName]);

  useEffect(() => {
    // console.log("execute function in useEffect");
    fetchData();
  }, [fetchData]);

  return [weatherElement, fetchData];
};

export default useWeatherApi;
