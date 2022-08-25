// Code your solution in this file!
const myArray = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}
console.log(returnFirstTwoDrivers(myArray));

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}
console.log(returnLastTwoDrivers(myArray));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
selectingDrivers[0]
console.log(selectingDrivers[0](myArray))

function createFareMultiplier(n) {
   return function(fare) {
        return fare * n;
   }
}
console.log(createFareMultiplier());

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func){
    return func(drivers);
}