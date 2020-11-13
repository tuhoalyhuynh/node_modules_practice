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

// convert allows quick unit conversions
const { convert } = require('convert');

const tempFahrenheit = 52;
const elevationFeet = 141;
const weightPounds = 150;

const tempCelsius = convert(52).from('fahrenheit').to('celsius');
const elevationMeters = convert(141).from('feet').to('meters');
const weightKilograms = convert(150).from('pounds').to('kilograms');

console.log(`It is ${tempFahrenheit} degrees fahrenheit or ${tempCelsius.toFixed(2)} degrees celsius in Boston right now`);
// turns out the conversion from fahrenheit to celsius is wrong
console.log(`Boston is ${elevationFeet} feet or ${elevationMeters.toFixed(2)} meters above sea level`);
console.log(`${weightPounds} pounds is equivalent to ${weightKilograms.toFixed(2)} kilograms`);

// chalk allows you to chain and nest styles as needed
const chalk = require('chalk');

console.log(chalk.blue('Hello!'))

const go = chalk.green;
const slow = chalk.yellow;
const stop = chalk.red;

console.log(stop('On your mark'), slow('Get set'), go('Go!'))