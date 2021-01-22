// https://github.com/Mehzad-Galib/javascript_Assignment

// Problem 1: Kilometer to meter conversion; 1km = 1000m;
function kilometerToMeter(km) {
    if (Number.isFinite(km) == true) {
        if (km < 0) {
            return "Distance Cannot be Negative, Please try again";
        } else {
            var toMeter = km * 1000;
            return toMeter;
        }
    } else {
        return "Please input a valid number";
    }
}


// Problem 2: Budget Calculator(50tk/watch, 100tk/phone, 500tk/laptop)
function budgetCalculator(watch, phone, laptop) {
    if (Number.isInteger(watch) == true && Number.isInteger(phone) == true && Number.isInteger(laptop) == true) { // watch,phone, laptops must be an integer
        if (laptop < 0 || watch < 0 || phone < 0) {
            return "Please input a Positive Quantity";
        } else {
            var totalCost = watch * 50 + phone * 100 + laptop * 500;
            return totalCost;
        }
    } else {
        return "please input a valid number";
    }
}

// Problem 3: Determining hotel cost
function hotelCost(days) {
    if (Number.isInteger(days) == true) { //condition to put an integer because days cannot be floating numbers
        if (days < 0) {
            return "Days cannot be a negative number";
        } else {
            Math.ceil(days);
            var totalRent = 0;
            if (days <= 10) {
                totalRent = days * 100;
            } else if (days > 10 && days <= 20) {
                totalRent = 10 * 100 + (days - 10) * 80;
            } else {
                totalRent = 10 * 100 + 10 * 80 + (days - 20) * 50;
            }
            return totalRent;
        }
    } else {
        return "Please input a proper number";
    }
}

// Problem 4: Finding longest name of a friend in an Array 
function megaFriend(arr) {
    if (Array.isArray(arr) == false) { // checking if input is an array
        return "This is not an Array";
    } else {
        var result = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (result.length < arr[i].length) {
                result = arr[i];
            }
        }
        return result;
    }
}