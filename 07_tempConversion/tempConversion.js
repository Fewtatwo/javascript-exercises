const convertToCelsius = function(farValue) {
  let converted;
  if (farValue !== 32) {
      converted = Math.round(((farValue  - 32) / 1.8)*10) / 10;   
  return converted;
  } else {
      return converted = 0;
  }
};

const convertToFahrenheit = function(celValue) {
  let converted;
  if (celValue !== 0) {
      converted = Math.round(((celValue * 1.8) + 32)*10) / 10;
      return converted;
  } else {
      return converted = 32;
  }



};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
