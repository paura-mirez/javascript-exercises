const leapYears = function(year) {

    let div4 = year % 4
    let div100 = year % 100
    let div400 = year % 400

    if ((div4 == 0 && div100 !== 0) == false) {
        return (div400==0)
    }
    else {
        return (div4 == 0 && div100 !== 0)
    }

};

// Do not edit below this line
module.exports = leapYears;
