// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

const form = document.querySelector('[data-testid="testForm"]');
    const pilotNameInput = form.querySelector('[name="pilotName"]');
    const copilotNameInput = form.querySelector('[name="copilotName"]');
    const fuelLevelInput = form.querySelector('[name="fuelLevel"]');
    const cargoMassInput = form.querySelector('[name="cargoMass"]');
    const submitButton = form.querySelector('formSubmit');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        const testInput = "some value";
        validateForm(testInput);
    });

    function validateInput(testInput) {
        if (testInput === "") {
            alert("All fields are required!");
            return;
        }
        
        if (isNaN(testInput)) {
            alert("Fuel Level and Cargo Mass must be numbers!");
            return;
        }

        if (testInput === "some value") {
            alert("Test input is valid!");
            return;
        }
        
        alert("Validation successful. Ready to launch!");
    }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
validateInput(pilot, copilot, fuelLevel, cargoLevel)   
// validateInput(copilot) 
// validateInput(fuelLevel) 
// validateInput(cargoLevel) 
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
