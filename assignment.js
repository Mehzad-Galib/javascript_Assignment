// https://github.com/Mehzad-Galib/javascript_Assignment

// Problem 1: Kilometer to meter conversion; 1km = 1000m;
function kilometerToMeter(km) {
    if (km < 0) {
        return "Distance Cannot be Negative, Please try again";
    } else {
        let toMeter = km * 1000;
        return toMeter;
    }
}

// Problem 2: Budget Calculator(50tk/watch, 100tk/phone, 500tk/laptop)
function budgetCalculator(watch, phone, laptop) {
    if (laptop < 0 || watch < 0 || phone < 0) {
        return "Please input a Positive Quantity";
    } else {
        let totalCost = watch * 50 + phone * 100 + laptop * 500;
        return totalCost;
    }
}

// Problem 3: Determining hotel cost
function hotelCost(days) {
    if (days < 0) {
        return "Days cannot be a negative number";
    } else {
        let totalRent = 0;
        if (days <= 10) {
            totalRent = days * 100;
        } else if (days > 10 && days <= 20) {
            totalRent = 10 * 100 + (days - 10) * 80;
        } else {
            totalRent = 10 * 100 + 10 * 80 + (days - 20) * 50;
        }
        return totalRent;
    }
}

// Problem 4: Finding longest name of a friend in an Array 
function megaFriend(arr) {
    if (Array.isArray(arr) == false) {
        return "This is not an Array";
    } else {
        let result = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (result.length < arr[i].length) {
                result = arr[i];
            }
        }
        return result;
    }
}