/* Dalida Airlines is always safe and reliable!
* The airplane stays up because it does not have the time to fall.
* The following is interactional flight booking system, to continue follow the instructions(?)
*/

let profile = {};

let readlineSync = require('readline-sync');

console.log("Greetings! Welcome to Dalida Airlines!\nTo book a flight proceed further and answer to given questions(?)")

profile["customerName"] = readlineSync.question("May I have your name? ");
console.log("Hi, " + profile["customerName"] + "!");

profile["customerEmail"] = readlineSync.question("I want to know your email to send there more information about flight ");

let cityList = ["London", "Paris", "Madrid", "Nur-Sultan", "Almaty", "San-Francisco", "New York", "Karagandy", "Semey", "Atyrau", "Moscow"];

let from;

while(!from) {
    let cur = readlineSync.question("From which city are you going to departure? ");
    if(cityList.includes(cur)) {
        from = cur;
        break;    
    }
    console.log("Please, try again(");
}

let to;

while(!to) {
    let cur = readlineSync.question("Choose your destination ");
    if(cityList.includes(cur)) {
        to = cur;
    }
    console.log("Please, try again(")
}

profile["flights"] = [];
profile["flights"].push({"From": from, "To": to});

const calculatePrice = (cityFrom, cityTo) => {
    let n = cityFrom.length;
    let m = cityTo.length;
    return ((n * m) % 10 + n + m) * 100;
};

console.log(`Congratulations! You have booked a flight from ${from} to ${to} for just $${calculatePrice(from, to)}!`)