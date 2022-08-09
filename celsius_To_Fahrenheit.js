function celciusToFahrenheit(input){
    const cToFahr = (input * 9/5) + 32;
    return cToFahr;
}
const celsius = 2;
const fahr = celciusToFahrenheit(celsius);
console.log(fahr);