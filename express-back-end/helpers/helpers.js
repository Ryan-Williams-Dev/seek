/* REMINDER: calculateDistance function will require refactoring if the argument objects don't come with the key names that are used
in the function definition below.
Code sourced and modified from: https://www.geodatasource.com/developers/javascript under LGPLv3 license. */

const calculateDistance = (gameLocation, guessLocation) => {
  const { gameLat, gameLng } = gameLocation;
  const { guessLat, guessLng } = guessLocation;

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

  return distance.toFixed(3);
};

const calculateScore = (distance) => {
  console.log("calculateScore function accessed.");
};

// TEST DATA
// const game = {
//   gameLat: 50.46395829044944,
//   gameLng: -3.559119893159155
// };

// const guess = {
//   guessLat: 52.51422658198417,
//   guessLng: 13.468929037717059
// };

// console.log(calculateDistance(game, guess));

module.exports = { calculateDistance, calculateScore };