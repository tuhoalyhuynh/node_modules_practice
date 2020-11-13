const { favFoods, printFoods } = require("./myModule")

// distFrom calculates distance between two coordinates [latitude, longitude]
const distFrom = require("distance-from")

printFoods(favFoods)

// coordinates are taken into arrays 
const boston = [42.3601, -71.0589];
const atlanta = [33.7490, -84.3880];
const seattle = [47.6062, -122.3321];
const losAngeles = [34.0522, -118.2437];

const bostonAtlanta = distFrom(boston).to(atlanta).in('mi');
const bostonSeattle = distFrom(boston).to(seattle).in('km');
const bostonLosAngeles = distFrom(boston).to(losAngeles).in('mi');

console.log(`The distance between Boston and Atlanta is ${bostonAtlanta.toFixed(2)} miles`);
console.log(`The distance between Boston and Seattle is ${bostonSeattle.toFixed(2)} kilometers`);
console.log(`The distance between Boston and Los Angeles is ${bostonLosAngeles.toFixed(2)} miles`);