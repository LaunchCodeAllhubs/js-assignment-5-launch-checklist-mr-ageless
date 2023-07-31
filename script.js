// Write your JavaScript code here!

window.addEventListener("load", function() {

    let form = document.querySelector('formsubmit');
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
   form.addEventListener("submit", function(event) {
    event.preventDefault();
    let pilotnameInput = document.querySelector("input[name='pilotname']");
    let copilotnameInput = document.querySelector("input[name='copilotname']");
    let fuellevelInput = document.querySelector("input[name='fuellevel']");
    let cargomassInput = document.querySelector("input[name='cargomass']");
    if (pilotusernameInput.value === "" || copilotnameInput.value === "" || fuellevelInput.value === "" || cargomassInput.value === "") {
    alert("All fields are required.");
    console.log(alert)
    }
   })
   
});