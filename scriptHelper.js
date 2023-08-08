// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   const missionTargetDiv = document.getElementById("missionTarget");
   
   const html = `
       <h2>Mission Destination</h2>
       <ol>
           <li>Name: ${name}</li>
           <li>Diameter: ${diameter}</li>
           <li>Star: ${star}</li>
           <li>Distance from Earth: ${distance}</li>
           <li>Number of Moons: ${moons}</li>
       </ol>
       <img src="${imageUrl}">
   `;

   missionTargetDiv.innerHTML = html;
}

    function validateInput(testInput) {
        if (testInput === "") {
            return "Empty";
        } else if (isNaN(testInput) === false) {
            return "Is a Number";
        } else if (isNaN(testInput) === true) {
            return "Not a Number";
        }
    }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
        alert("All fields are required.");
    } else if (isNaN(pilot) === false || isNaN(copilot) === false) {
        alert("Please enter a valid name for the pilot's name and/or the copilot's name.");
    } else if ((isNaN(fuelLevel) === true) || (isNaN(cargoLevel) === true)) {
        alert("Fuel level and/or cargo mass must be a number.");
    } else {
        document.getElementById("pilotStatus").innerHTML = "Pilot " + pilot + " is ready for launch";
        document.getElementById("copilotStatus").innerHTML = "Co-pilot " + copilot + " is ready for launch";
        if (fuelLevel < 10000) {
           document.getElementById("faultyItems").style.visibility = "visible";
           document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
           document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
           document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        } else {
           document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        }
        if (cargoLevel >= 10000) {
           document.getElementById("faultyItems").style.visibility = "visible";
           document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
           document.getElementById("launchStatus").style.color = "#C7254E";
           document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        } else {
           document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        }
        if (cargoLevel <= 10000 && fuelLevel >= 10000) {
           document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
           document.getElementById("launchStatus").style.color = "#419F6A";
           document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
           document.getElementById("faultyItems").style.visibility = "visible";
        }
     }
    validateInput()
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    const randomIndex = Math.floor(Math.random() * planets.length);
    const randomPlanet = planets[randomIndex];
    return randomPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
