const { nextISSTimesForMyLocation } = require('./iss_promised');

const printTimes = function(times) {
  for (const time of times) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });