// Kilometer to meter conversion; 1km = 1000m;
function kilometerToMeter(km) {
    result = 0;
    if (km < 0) {
        return "Distance Cannot be Negative, Please try again";
    } else {
        result = km * 1000;
        return result;
    }
}

// Budget Calculator
function budgetCalculator(watch, phone, laptop) {
    if (watch, phone, laptop < 0) {
        return "Please input a Positive Number";
    } else {
        let watchPrice = watch * 50;
        let phonePrice = phone * 100;
        let laptopPrice = laptop * 500;
        let totalPrice = watchPrice + phonePrice + laptopPrice;
        return totalPrice;
    }
}

// Determining hotel cost
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

// 4th work; Finding Mega Friend 
function megaFriend(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (result.length < arr[i].length) {
            result = arr[i];
        }
    }
    return result;
}