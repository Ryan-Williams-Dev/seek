/* REMINDER: calculateDistance function will require refactoring if the argument objects don't come with the key names that are used
in the function definition below.
Code sourced and modified from: https://www.geodatasource.com/developers/javascript under LGPLv3 license. */

const calculateDistance = (gameLocation, guessLocation) => {
  const gameLat = gameLocation.latitude;
  const gameLng = gameLocation.longitude;
  const guessLat = guessLocation.lat;
  const guessLng = guessLocation.lat;

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

  return Number(distance.toFixed(3));
};

const calculateScore = (distance) => {
  let score;
  if (distance >= 1000) {
    score = 0;
  } else if (distance >= 500 && distance < 1000) {
    score = distance * 0.25;
  } else if (distance >= 200 && distance < 500) {
    score = distance * 0.5;
  } else if (distance >= 100 && distance < 200) {
    score = distance * 0.75;
  } else if (distance >= 40 && distance < 100) {
    score = distance;
  } else if (distance >= 20 && distance < 40) {
    score = distance * 1.25;
  } else if (distance >= 8 && distance < 20) {
    score = distance * 1.5;
  } else if (distance >= 3 && distance < 8) {
    score = distance * 1.75;
  } else if (distance >= 1 && distance < 3) {
    score = distance * 2;
  } else if (distance >= 0.5 && distance < 1) {
    score = distance * 3;
  } else if (distance >= 0.15 && distance < 0.5 ) {
    score = distance * 3.5;
  } else if (distance < 0.15) {
    score = distance * 4;
  }

  return score;
};

const game = {};
const guess = {lat: 51.70663210602697, lng: 67.90055248618782,};

console.log("calculateDistance:", calculateDistance(game, guess))


module.exports = { calculateDistance, calculateScore };