// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.querySelector('[data-testid="testForm"]');
    let list = document.getElementById("faultyItems")
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilotnameInput = document.querySelector("[name='pilotName']");
        let copilotnameInput = document.querySelector("[name='copilotName']");
        let fuellevelInput = document.querySelector("[name='fuelLevel']");
        let cargomassInput = document.querySelector("[name='cargoMass']");
        formSubmission(document, faultyItems, pilotnameInput.value, copilotnameInput.value, fuellevelInput.value,cargomassInput.value);
    })


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
   
    
 });