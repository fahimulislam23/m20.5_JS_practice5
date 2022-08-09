function fahrToCelsius(input){
    const fahr = (input - 32) * 5/9;
    return fahr;
}
const fahrInput = 70.9;
const celsius = fahrToCelsius(fahrInput);
console.log(celsius);