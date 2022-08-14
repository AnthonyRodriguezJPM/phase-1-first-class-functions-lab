// Code your solution in this file!

const array=['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers=function(){
    const newArray=array.slice(0,2);
    return newArray;
}

console.log(returnFirstTwoDrivers(array));
console.log(array);

//////////

const returnLastTwoDrivers=function(){
    const lastArray=array.slice(2);
    return lastArray
}

console.log(returnLastTwoDrivers(array));
console.log(array);

//////////

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];
    
console.log(selectingDrivers[1]);

//////////


const createFareMultiplier=function(interger){
    return function(fare) {
        const newPrice=interger*fare;
        return newPrice;
    } 
};

console.log(createFareMultiplier(4)(4));

///////////

function fareDoubler(fare) {
    const double=2*fare;
    return double;
};

///////////

function fareTripler(fare){
    const triple=3*fare;
    return triple;
}

////////
function selectDifferentDrivers(array, selectNow) {
    if(selectNow===returnFirstTwoDrivers) {
        const hey=array.slice(0,2);
        return hey;
    }
    else if(selectNow===returnLastTwoDrivers) {
        const wow=array.slice(2);
        return wow;
    }
}
console.log(selectDifferentDrivers(array,returnLastTwoDrivers));

