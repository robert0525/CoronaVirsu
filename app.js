window.onload = function() {

}

function getCovidStats() {
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/225')
    .then(function(resp) { return resp.json() })
    .then(function(data) { 
        let population = data.location.country_population;
        let update = data.location.last_updated;
        let confirmedCases = data.location.latest.confirmed;
        let death = data.location.lstest.death;
    })
    .catch(function() {
        console.log(" You have an error");
    })

}