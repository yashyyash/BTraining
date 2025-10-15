const Cities = ["Bangalore", "Chennai", "Mumbai", "Hyderabad", "Pune"];

function arrangeConference(cities) {
  return new Promise((resolve, reject) => {
    if (cities.length >= 5) {
      resolve(cities);
    } else {
      reject("Less nominations! Confernce has been cancelled!");
    }
  });
}

const BajajConference = arrangeConference(Cities);
BajajConference.then((cities) => {
  for (const city of cities) {
    console.log(`Nominations are received from city ${city}!`);
  }
  const TravelCities = cities.filter((city) => city != "Pune");
  return Promise.resolve(TravelCities);
})
  .then((cities) => {
    for (const city of cities) {
      console.log(
        `Air Tickets are booked for all the employees traveling from city ${city}!`
      );
    }
    return Promise.resolve(cities);
  })
  .then((cities) => {
    for (const city of cities) {
      console.log(
        `Hotels are booked for all the employees traveling from city ${city}!`
      );
    }
    return Promise.resolve(cities);
  })
  .then((cities) => {
    for (const city of cities) {
      console.log(
        `Local Cabs are booked for all the employees traveling from city ${city}!`
      );
    }
    return Promise.resolve(cities);
  })
  .catch((reason) => console.log(reason))
  .finally(() => console.log("Conference Workflow is completed!"));
