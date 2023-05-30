function convert() {
    var input = parseFloat(document.getElementById("input").value);
    var fromUnit = document.getElementById("from").value;
    var toUnit = document.getElementById("to").value;
    
    var result;
    
    if (fromUnit === "cm" && toUnit === "inch") {
      result = input * 0.3937;
    } else if (fromUnit === "inch" && toUnit === "cm") {
      result = input * 2.54;
    } else if (fromUnit === "m" && toUnit === "km") {
      result = input * 0.001;
    } else if (fromUnit === "km" && toUnit === "m") {
      result = input * 1000;
    } else {
      result = input;
    }
    
    document.getElementById("result").innerHTML = result.toFixed(2);
  }
  