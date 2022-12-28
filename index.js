function isWithinRange(lat1, lon1, lat2, lon2, range) {
  const R = 6371e3; // earth's radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  console.log('Distance' , distance )
  console.log('Range' , range)

  return distance > range;
}

const lat1 = 35.288092;
const lon1 = -80.777155;
const lat2 = 39.248898;
const lon2 = -104.968567;
const range = 1000; // range in meters

console.log(isWithinRange(lat1, lon1, lat2, lon2, range)); // false