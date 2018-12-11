// ############################
// User:Stanley Nguyen
// ############################

var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $stateInput = document.querySelector("#state")
var $searchBtn = document.querySelector("#search");

$searchBtn.addEventListener("click", handleSearchButtonClick);


var filteredUFO = dataSet;

function renderTable() {
  $tbody.innerHTML = "";
  console.log("render is happening")

  for (var i = 0; i < filteredUFO.length; i++) {
    var sighting = filteredUFO[i];
    var fields = Object.keys(sighting);
   
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
    
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}

function handleSearchButtonClick() {
  var filterDate = $dateInput.value.trim();
  var filterState = $stateInput.value.trim().toLowerCase();

  if (filterDate.length != 0){
    filteredUFO = dataSet.filter(function(sighting) {
      var sightingDate = sighting.datetime;
       return sightingDate === filterDate;
         });
  }
  else {
    filteredUFO = dataSet
  }
  if (filterState.length != 0){
    filteredUFO = filteredUFO.filter(function(sighting) {
      var sightingState = sighting.state;
       return sightingState === filterState;
         });
  }
  else {
    filteredUFO = filteredUFO
  }
  renderTable();
}

renderTable();