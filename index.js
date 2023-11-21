/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")



convertBtn.addEventListener("click", function() {
    
    
    // length results
    let inputValue = document.getElementById("input-el").value
    inputValues = (inputValue * 3.281).toFixed(2)
    let reverseValues = (inputValue / 3.281).toFixed(2)
    let lengthResults = document.getElementById("result-lenght")
    lengthResults.innerHTML = `${inputValue} meters = ${inputValues} feets  | ${inputValue} feets = ${reverseValues} meters`
    
    // volume results
    let volumeResults = document.getElementById("result-volume")
    let volumeValue = (inputValue * 0.264).toFixed(2)
    let reverseVolumeValue = (inputValue / 0.264).toFixed(2)
    volumeResults.innerHTML = `${inputValue} liters = ${volumeValue} gallons | ${inputValue} gallons = ${reverseVolumeValue} liters`
    
    // mass results
    let massResults = document.getElementById("result-mass")
    let massValue = (inputValue * 2.204).toFixed(2)
    let reverseMassValue = (inputValue / 2.204).toFixed(2)
    massResults.innerHTML = `${inputValue} kilos = ${massValue} pounds | ${inputValue} pounds = ${reverseMassValue} kilos`
    
   
})