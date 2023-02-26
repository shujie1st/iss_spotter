const { nextISSTimesForMyLocation } = require('./iss');

/**
 * Input:
 *   Array of data objects defining the next fly-overs of the ISS.
 *   [ { risetime: <number>, duration: <number> }, ... ]
 * Returns:
 *   undefined
 * Sideffect:
 *   Console log messages to make that data more human readable.
 *   Example output:
 *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
 */

const printTimes = function(times) {
  for (const time of times) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printTimes(passTimes);
});

/*
const { fetchISSFlyOverTimes } = require('./iss');

fetchISSFlyOverTimes({ latitude: '45.5016889', longitude: '-73.567256' }, (error, times) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log('The flyover times for ISS: ', times);
});


const { fetchCoordsByIP } = require('./iss');

fetchCoordsByIP('174.112.226.200', (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log('Your coordinates: ', data);
});



const { fetchMyIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});
*/