function calculate() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    console.log("height: " + height)
    if (isNaN(height) || isNaN(weight)) {
        alert("Please enter valid height and weight!");
        return;
    }
    let result = (height / weight).toFixed(2);
    let resultDiv = document.getElementById('result');
    resultDiv.innerText = result;
}