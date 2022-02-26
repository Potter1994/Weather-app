export const fetchForecastWeather = (locationName) => {
  if (!locationName)
    return fetch(
      `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=CWB-4254CE67-A508-488D-B1E9-4DAAB99A21B6&locationName=左營`
    ).then((res) => res.json());
  return fetch(
    `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=CWB-4254CE67-A508-488D-B1E9-4DAAB99A21B6&locationName=${locationName}`
  ).then((res) => res.json());
};
