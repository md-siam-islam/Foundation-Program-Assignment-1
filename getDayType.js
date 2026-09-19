const getDayType = (day) => {
  let dayName = day.trim().toLowerCase();

  switch (dayName){
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
