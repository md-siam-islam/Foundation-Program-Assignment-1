const getCngFare = (distance, isNight = false, waitingMinutes = 0) => {
  let fare = 50;

  if (distance > 2) {
    let getDistance = (distance - 2) * 15;
    fare += getDistance;
  }

  let waringFare = waitingMinites * 2;

  fare += waringFare;

  if (isNight) {
    fare *= 1.2;
  }
  return fare;
};
