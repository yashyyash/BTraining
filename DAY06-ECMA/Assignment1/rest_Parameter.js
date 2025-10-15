function travelCities(country, ...cities) {
  console.log(`In country ${country} - You will travel to - `);
  for (const city of cities) {
    console.log(`City - ${city}!`);
  }
}
travelCities("India", "Bangalore", "Chennai");
travelCities("India", "Bangalore", "Chennai", "Hyderabad");
travelCities("India", "Bangalore", "Chennai", "Mumbai", "Pune");