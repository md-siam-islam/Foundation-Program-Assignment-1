//Question No. 1
const describeValue = (value) => {
  let truthyOrFalsy;

  if (value) {
    truthyOrFalsy = "truthy";
  } else {
    truthyOrFalsy = "falsy";
  }

  const type = typeof value;

  return `${type} | ${truthyOrFalsy}`;
};


//Question No. 2
const getDayType = (day) => {
  let dayName = day.trim().toLowerCase();

  switch (dayName) {
    case "friday":
    case "saturday":
      return "Weekend";
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
    default:
      return "Invalid Day";
  }
};

//Question No. 3
const validateUsername = (username) => {
  if (username.length < 3) {
    return "Too Short";
  } else if (username.includes(" ")) {
    return "No Spaces Allowed";
  } else if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  } else {
    return "Available";
  }
};

//Question No. 4
const getCngFare = (distance, isNight = false, waitingMinutes = 0) => {
  let fare = 50;

  if (distance > 2) {
    let getDistance = (distance - 2) * 15;
    fare += getDistance;
  }

  let waitingFare = waitingMinutes * 2;

  fare += waitingFare;

  if (isNight) {
    fare *= 1.2;
  }
  return fare;
};

// Question No. 5

const getChaseVerdict = (target, scored, ballsLeft) => {

    let runsNeeded  = target - scored;

    if(runsNeeded <=0){
        return "Won";
    }

    if(ballsLeft <= 0){
        return "Lost";
    }

    let requiredRate = (runsNeeded / ballsLeft) * 6;

    let verdict;

    if( requiredRate <=6){
        verdict = "Comfortable";
    }else if( requiredRate <=12){
        verdict = "Tough";
    }else{
        verdict = "Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`

}