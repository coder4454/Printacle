// Server-side price list + delivery rules. The browser is never trusted for prices.
const BASE_PINCODE = "147001";

function buildCatalog() {
  const prices = {};
  for (let i = 1; i <= 19; i++) prices[`poster${i}`] = 199;
  for (let i = 1; i <= 21; i++) prices[`tote${i}`] = 199;
  Object.assign(prices, {
    mug1: 249,
    mug2: 399,
    mug3: 549,
    mug4: 399,
    mug5: 249,
    mug6: 249,
    car1: 199
  });
  return prices;
}

const PRICES = buildCatalog();

function getDeliveryCharge(distance) {
  const d = Number(distance);
  if (!Number.isFinite(d) || d < 0) return null;
  if (d <= 50) return 20;
  if (d <= 200) return 30;
  if (d <= 400) return 40;
  if (d <= 500) return 50;
  return 100;
}

async function getPincodeLocation(pincode) {
  const response = await fetch(`https://api.zippopotam.us/in/${encodeURIComponent(pincode)}`);
  if (!response.ok) throw new Error("Pincode not found");
  const data = await response.json();
  if (!data.places || !data.places.length) throw new Error("Pincode location unavailable");
  return {
    latitude: Number(data.places[0].latitude),
    longitude: Number(data.places[0].longitude)
  };
}

function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

async function calculateDelivery(pincode) {
  const [origin, destination] = await Promise.all([
    getPincodeLocation(BASE_PINCODE),
    getPincodeLocation(pincode)
  ]);
  const distance = haversineDistance(
    origin.latitude, origin.longitude, destination.latitude, destination.longitude
  );
  return getDeliveryCharge(distance);
}

module.exports = { PRICES, calculateDelivery };
