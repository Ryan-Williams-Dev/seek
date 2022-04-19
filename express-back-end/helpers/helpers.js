
const calculateDistance = (gameLocation, guessLocation) => {
  const { gameLat, gameLng } = gameLocation;
  const { guessLat, guessLng } = guessLocation;

  const radGameLat = Math.PI * gameLat / 180;
  const radGuessLat = Math.PI * guessLat / 180;
  const theta = gameLng - guessLng;

  const radTheta = Math.PI * theta / 180;
  let distance = Math.sin(radGameLat) *  Math.sin(radGuessLat) + Math.cos(radGameLat) * Math.cos(radGuessLat) * Math.cos(radTheta);

  if (distance > 1) {
    distance = 1;
  }

  distance = Math.acos(distance);
  distance = distance * 180 / Math.PI;
  distance = distance * 60 * 1.1515;

  // Converts distance from miles to kilometers.
  distance = distance * 1.609344;

  return distance;
}