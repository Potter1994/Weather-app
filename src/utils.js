export const availableLocations = [
  {
    cityName: "宜蘭縣",
    locationName: "三星",
    sunriseCityName: "宜蘭",
  },
  {
    cityName: "嘉義市",
    locationName: "嘉義市東區",
    sunriseCityName: "嘉義",
  },
  {
    cityName: "屏東縣",
    locationName: "三地門",
    sunriseCityName: "屏東",
  },
  {
    cityName: "雲林縣",
    locationName: "虎尾",
    sunriseCityName: "屏東",
  },
  {
    cityName: "臺東縣",
    locationName: "太麻里",
    sunriseCityName: "臺東",
  },
  {
    cityName: "臺北市",
    locationName: "天母",
    sunriseCityName: "臺北",
  },
  {
    cityName: "金門縣",
    locationName: "烏坵",
    sunriseCityName: "金門",
  },
  {
    cityName: "桃園市",
    locationName: "復興",
    sunriseCityName: "桃園",
  },
  {
    cityName: "彰化縣",
    locationName: "鹿港",
    sunriseCityName: "彰化",
  },
  // {
  //   cityName: '嘉義縣',
  //   locationName: '阿里山',
  //   sunriseCityName: '嘉義',
  // },
  {
    cityName: "高雄市",
    locationName: "鳳山",
    sunriseCityName: "高雄",
  },
  {
    cityName: "基隆市",
    locationName: "基隆嶼",
    sunriseCityName: "基隆",
  },
  {
    cityName: "臺南市",
    locationName: "大內",
    sunriseCityName: "臺南",
  },
  {
    cityName: "南投縣",
    locationName: "水里",
    sunriseCityName: "南投",
  },
  {
    cityName: "臺中市",
    locationName: "中坑",
    sunriseCityName: "臺中",
  },
  {
    cityName: "新竹縣",
    locationName: "關西",
    sunriseCityName: "新竹",
  },
  {
    cityName: "花蓮縣",
    locationName: "天祥",
    sunriseCityName: "花蓮",
  },
  {
    cityName: "連江縣",
    locationName: "東莒",
    sunriseCityName: "馬祖",
  },
  {
    cityName: "澎湖縣",
    locationName: "西嶼",
    sunriseCityName: "澎湖",
  },
  {
    cityName: "新北市",
    locationName: "坪林",
    sunriseCityName: "新北市",
  },
];

export const findLocation = (cityName) => {
  return availableLocations.find((location) => location.cityName === cityName);
};
