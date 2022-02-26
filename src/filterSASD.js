const fs = require("fs");

const fileContents = fs.readFileSync("A-B0062-001.json", "utf-8");
const dataset = JSON.parse(fileContents);

const locations = dataset.cwbopendata.dataset.locations.location;
const nowTimeStamp = new Date("2022-02-22").getTime();

// console.log(locations[0].time[0]);

const newData = locations.map((location) => {
  const time = location.time
    .filter((time) => new Date(time.dataTime).getTime() > nowTimeStamp)
    .map((time) => {
      const { sunrise, sunset } = time.parameter
        .filter((timeParameter) =>
          ["日出時刻", "日沒時刻"].includes(timeParameter.parameterName)
        )
        .reduce((accumulator, timeParameter) => {
          const objectKey =
            timeParameter.parameterName === "日出時刻" ? "sunrise" : "sunset";
          accumulator[objectKey] = timeParameter.parameterValue;
          return accumulator;
        }, {});

      return {
        dataTime: time.dataTime,
        sunrise,
        sunset,
      };
    });

  return {
    locationName: location.locationName,
    time,
  };
});

fs.writeFile("sunrise-sunset.json", JSON.stringify(newData, null, 2), (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
