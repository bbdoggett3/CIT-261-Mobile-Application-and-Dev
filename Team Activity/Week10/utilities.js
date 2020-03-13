//this will be a fetching data from an external API using FETCCH
export function getJSON(url) {
	return fetch(url);
	.then(function(response) {
		if (!response.ok) {
			throw Error(response.statusText);
		} else {
			return response.json();
		}
  
  })
  .catch(function(error) {
    console.log(error);
  });

}

  //This is an app that is able to return earthquakes within a certain radius of our current location
  export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};
