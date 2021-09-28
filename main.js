function Convert() {
    // GLOBAL
    //  Get input value and transform it from string to float number
    let valueElement = document.getElementById('value')
    let value = valueElement.value
    let celsiusValue = parseFloat(value)

    // FAHRENHEIT
    // Convert celsius value to fahrenheit
    let fahrenheitValue = ((celsiusValue * 9/5) + 32)

    // Link fahrenheit value to html h2 to show it when clicking the button
    let fahrenheitValueElement = document.getElementById('convertedValueFahrenheit')
    let convertedValueFahrenheit = celsiusValue + "°C é igual a " + fahrenheitValue + "°F"
    fahrenheitValueElement.innerHTML = convertedValueFahrenheit

    // KELVIN
    // Convert celsius value to kelvin
    let kelvinValue = (celsiusValue + 273.15)

    // Link kelvin value to html h2 to show it when clicking the button
    let kelvinValueElement = document.getElementById('convertedValueKelvin')
    let convertedValueKelvin = celsiusValue + "°C é igual a " + kelvinValue + "K"
    kelvinValueElement.innerHTML = convertedValueKelvin
}