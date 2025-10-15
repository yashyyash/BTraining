const Cities = ["Bangalore", "Chennai", "Mumbai", "Hyderabad", "Pune"];

function conferenceCities(cities, confernceCity) {
  return new Promise((resolve, reject) => {
    if (cities.length >= 5) {
      resolve(cities.filter((city) => city != confernceCity));
    } else {
      reject("Less nominations received from the cities! Conference Rejected!");
    }
  });
}

function bookFlighs(cities) {
  return new Promise((resolve, reject) => {
    for (const city of cities) {
      console.log(
        `Flight tickets are booked for the employees of the city ${cities}!`
      );
    }
    resolve(cities);
  });
}
async function bookHotels(cities) {
  return new Promise((resolve, reject) => {
    for (const city of cities) {
      console.log(
        `Hotels are booked for the employees of the city ${cities}!`
      );
    }
    resolve(cities);
  });
}
async function bookLocalTravel(cities) {
  return new Promise((resolve, reject) => {
    for (const city of cities) {
      console.log(
        `Local Cabs are booked for the employees of the city ${cities}!`
      );
    }
    resolve(cities);
  });
}

async function arrangeConference(cities) {
  try {
    const TravelCities = await conferenceCities(cities, "Chennai");
    const fligtBookingsCities = await bookFlighs(TravelCities);
    const hotelBookingsCities = await bookHotels(fligtBookingsCities);
    await bookLocalTravel(hotelBookingsCities);
  } catch (error) {
    console.log(`Error - ${error}!`);
  }
}

arrangeConference(Cities);
