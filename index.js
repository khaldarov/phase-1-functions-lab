// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber0) {
  let blocksDistance = Math.abs(42 - streetNumber0);
  return blocksDistance;
}
distanceFromHqInBlocks(50);
// console.log(distanceFromHqInBlocks(50))
//
function distanceFromHqInFeet(streetNumber1) {
  // let feetDistance = (Math.abs(42 - streetNumber1) * 264)
  let feetDistance = distanceFromHqInBlocks(streetNumber1) * 264;
  return feetDistance;
}
distanceFromHqInFeet(50);
// console.log(distanceFromHqInFeet(50))
//
function distanceTravelledInFeet(start, end) {
  let travelledDistance = Math.abs(end - start) * 264;
  return travelledDistance;
}
distanceTravelledInFeet(60, 50);
// console.log(distanceTravelledInFeet(60, 50))
//
const roundToHundredth = (value) => {
  return Number(value.toFixed(2));
};
function calculatesFarePrice(start, end) {
  const faredDistance = distanceTravelledInFeet(start, end);
  let price = 0;
  if (0 <= faredDistance && faredDistance <= 400) price = 0
  else if (400 < faredDistance && faredDistance <= 2000) price = roundToHundredth(faredDistance * .02 - (400 * .02));
  else if (2000 < faredDistance && faredDistance < 2500) price = 25
  else return 'cannot travel that far'

  /* switch (calculatesFarePrice) {
    case 0 <= faredDistance && faredDistance <= 400:
      return (price = 0);
      break;
    case 400 < faredDistance && faredDistance <= 2000:
      return (price = faredDistance * 0.02 - 400 * 0.02);
      break;
    case 2000 < faredDistance && faredDistance < 2500:
      return (price = 25);
      break;
    case 2500 < faredDistance:
      return "cannot travel that far";
  } */

  /* while (faredDistance <= 400) {
    price = 0;
  }
  while (400 < faredDistance && faredDistance <= 2000) {
    price = faredDistance * 0.02;
  }
  while (2000 < faredDistance && faredDistance <= 2500) {
      price = 25
  }
  while (2500 < faredDistance) {
      return "cannot travel that far"
  } */
  return price;
}
calculatesFarePrice(34, 32);
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(24, 34));
