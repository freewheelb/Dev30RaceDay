//RACE DAY PROJECT

// RANDOM RACE NUMBER ASSIGNMENT
let raceNumber = Math.floor(Math.random() * 1000)

// OTHER VARIABLES
let raceTime = '';
let specialMessage = '';

// DRIVING VARIABLES
const earlyRegistration = !true;
const age = 19;

// RACE TIME CONDITIONALS
if (earlyRegistration === true && age >= 18){
    raceNumber += 1000;
    raceTime = "9:30 am";
    specialMessage = "Thank you for registering early!";
}
else if (earlyRegistration === false && age >= 18){
    raceTime = "11:00 am";
    specialMessage = "Thank you for registering!";
}
else if (age < 18) {
    raceTime = "12:30 pm"
    specialMessage = "Enjoy the race!";
}
// OUTPUT. I ADDED A REGISTRATION-SPECIFIC SPECIAL MESSAGE
console.log(specialMessage);

console.log(`You will race at ${raceTime} and your number is: ${raceNumber}`);
