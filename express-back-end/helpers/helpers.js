/* REMINDER: calculateDistance function will require refactoring if the argument objects don't come with the key names that are used
in the function definition below.
Code sourced and modified from: https://www.geodatasource.com/developers/javascript under LGPLv3 license. */

const calculateDistance = (gameLocation, guessLocation) => {
  const gameLat = gameLocation.latitude;
  const gameLng = gameLocation.longitude;
  const guessLat = guessLocation.lat;
  const guessLng = guessLocation.lng;

  const radGameLat = Math.PI * gameLat / 180;
  const radGuessLat = Math.PI * guessLat / 180;
  const theta = gameLng - guessLng;

  const radTheta = Math.PI * theta / 180;
  let distance = Math.sin(radGameLat) * Math.sin(radGuessLat) + Math.cos(radGameLat) * Math.cos(radGuessLat) * Math.cos(radTheta);
  if (distance > 1) {
    distance = 1;
  }
  
  distance = Math.acos(distance);
  distance = distance * 180 / Math.PI;
  distance = distance * 60 * 1.1515;

  // Converts distance from miles to kilometers.
  distance = distance * 1.609344;

  return Number(distance.toFixed(1));
};

const calculateScore = (distance) => {
  if (distance > 2500) return 0;
  let score = 5000 - (distance * 2);
  return Math.round(score);
};

const generateDailyGameNum = () => {
  const startDate = new Date(2022, 8, 14); // month is by index (so april = 3), setting startDay to today will result in id = 1;
  const todayDate = new Date();
  const differenceInTime = Math.abs(startDate - todayDate);
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
  return differenceInDays; 
}

module.exports = { calculateDistance, calculateScore, generateDailyGameNum };