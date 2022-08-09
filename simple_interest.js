function Interest(p, r, n){
    const si = (p * r * n) / 100;
    return si;
}
let principalAmount = 100000;
let interestAmount = 4.25;
let time = 2;
let simpleInterestIs = Interest(principalAmount, interestAmount, time);
console.log(simpleInterestIs);