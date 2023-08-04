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

// const form = document.querySelector('[data-testid="testForm"]');
//     const pilotNameInput = form.querySelector('[name="pilotName"]');
//     const copilotNameInput = form.querySelector('[name="copilotName"]');
//     const fuelLevelInput = form.querySelector('[name="fuelLevel"]');
//     const cargoMassInput = form.querySelector('[name="cargoMass"]');
//     const submitButton = form.querySelector('formSubmit');

    // submitButton.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     const testInput = "some value";
    //     validateForm(testInput);
    // });

    function validateInput(testInput) {
        if (testInput === Number) {
            return "Is a number.";
        } else if (isNaN(testInput) === true) {
            return "Is not a number.";
        } else if (testInput === "") {
            return "Empty";
        }
    }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
        alert("All fields are required.")
    } else if ((isNaN(fuelLevel) === true) || (isNaN(cargoMass) === true)) {
        "Fuel level and/or cargo mass must be a number."
    }
    validateInput(pilot)
    validateInput(fuelLevel)
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
