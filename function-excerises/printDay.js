function printDay(numb) {
  if (numb < 1 || numb > 7) {
    return undefined;
  }

  const DAYS_OF_WEEK = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  };

  return DAYS_OF_WEEK[numb];
}
