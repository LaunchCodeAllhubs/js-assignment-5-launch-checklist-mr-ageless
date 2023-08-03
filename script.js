// Write your JavaScript code here!

window.addEventListener("load", function() {
    // let form = document.querySelector('[data-testid="testForm"]');
    // let form = document.querySelector("form");
    // let list = document.getElementById("faultyItems")
    // form.addEventListener("submit", function(event) {
    //     event.preventDefault();
    //     event.stopPropagation();

    //     // let list = document.getElementById("faultyItems")
    //     let pilotnameInput = document.querySelector("[name='pilotName']");
    //     let copilotnameInput = document.querySelector("[name='copilotName']");
    //     let fuellevelInput = document.querySelector("[name='fuelLevel']");
    //     let cargomassInput = document.querySelector("[name='cargoMass']");
    //     formSubmission(document, faultyItems, pilotnameInput.value, copilotnameInput.value, fuellevelInput.value,cargomassInput.value);
    // })
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
       let list = document.getElementById("faultyItems")
       let pilotnameInput = document.querySelector("input[name=pilotName]");
       let copilotnameInput = document.querySelector("input[name=copilotName]");
       let fuellevelInput = document.querySelector("input[name=fuelLevel]");
       let cargomassInput = document.querySelector("input[name=cargoMass]");
        formSubmission(document, list, pilotnameInput.value, copilotnameInput.value, fuellevelInput.value,cargomassInput.value);
       console.log(pilotInput.value);
       
       if ((pilotnameInput.value === '')|| (copilotnameInput.value === '')||(fuellevelInput.value === '') || (cargomassInput.value === '')) {
          alert("Please enter all information");
          event.preventDefault();
       } else if (isNaN(pilotnameInput.value) === false || isNaN(copilotnameInput.value) === false) {
          alert("Please enter valid name for Pilot Name or Co-pilot Name (or both)");
          event.preventDefault();
       } else if (isNaN(fuellevelInput.value) === true || isNaN(cargomassInput.value) === true) {
          alert("Please enter valid number for Fuel Level or Cargo Mass (or both)");
          event.preventDefault();
       } else {
          document.getElementById("pilotStatus").innerHTML = "Pilot " + pilotnameInput.value + " Ready";
          document.getElementById("copilotStatus").innerHTML = "Co-pilot " + copilotnameInput.value + " Ready";
          if (fuelLevelInput.value <= 10000) {
             document.getElementById("faultyItems").style.visibility = "visible";
             document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
             document.getElementById("launchStatus").style.color = "red";
             document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
          } else {
             document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
          }
          if (cargoMassInput.value >= 10000) {
             document.getElementById("faultyItems").style.visibility = "visible";
             document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
             document.getElementById("launchStatus").style.color = "red";
             document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
          } else {
             document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
          }
          if (cargoMassInput.value <= 10000 && fuelLevelInput.value >= 10000) {
             document.getElementById("launchStatus").innerHTML = "Shuttle Ready for Launch";
             document.getElementById("launchStatus").style.color = "green";
             document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
             document.getElementById("faultyItems").style.visibility = "hidden";
          }
          event.preventDefault();
       }
    });
 });

    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // })
   
    