function convertTemperature() {
  var inputTemp = parseFloat(document.getElementById("inputTemp").value);
  var fromUnit = document.getElementById("fromUnit").value;
  var toUnit = document.getElementById("toUnit").value;
  var resultElement = document.getElementById("result");

  if (fromUnit === toUnit) {
    resultElement.innerText = "Please select different units.";
    return;
  }

  var convertedTemp;
  if (fromUnit === "celsius" && toUnit === "fahrenheit") {
    convertedTemp = (inputTemp * 9/5) + 32;
  } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
    convertedTemp = (inputTemp - 32) * 5/9;
  }

  resultElement.innerText = "Converted temperature: " + convertedTemp.toFixed(2) + " " + toUnit;
}
