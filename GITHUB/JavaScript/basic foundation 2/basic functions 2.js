// 1. Biggie Size 
function makeItBig(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = 'big';
        }
    }

    return arr;
}


// 2. Print Low, Return High
function printLowReturnHigh(arr) {
    var high = arr[0];
    var low = arr[0]

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > high) {
            high = arr[i];
        }
        if (arr[i] < low) {
            low = arr[i];
        }
    }
    console.log(low)
    return high;
}


// 3. Print One, Return Another 
function printOneReturnAnother(arr) {
    var secondToLast = arr[arr.length - 2];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            firstOdd = arr[i];
            break;
        }
    }

    console.log(secondToLast);
    return firstOdd;
}


// 4. Double Vision 
function double(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;
}


// 5. Count Positives 
function countPositives(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count += 1;
        } 
    }
    arr[arr.length - 1] = count;
    return arr;
}


// 6. Evens and Odds 
function evensAndOdds(arr) {
    var oddsCounter = 0;
    var evensCounter = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) { 
            continue;
        } else if (arr[i] % 2 != 0) { 
            oddsCounter += 1;
            if (oddsCounter === 3) {
                console.log("That's odd!");
                oddsCounter = 0;
                evensCounter = 0;
            }
        } else { 
            evensCounter += 1;
            if (evensCounter === 3) {
                console.log("Even more so!");
                evensCounter = 0;
                oddsCounter = 0;
            }
        }
    }
}


// 7. Increment the Seconds
function incrementSeconds(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            arr[i] = arr[i] + 1;
        }
        console.log(arr[i]);
    }
    return arr;
}


// 8. Previous Lengths 
function previousLengths(arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        newarr[i] = arr[i].length;
    }
    for (var n = 1, x = 0; n < arr.length; n++, x++) {
        arr[n] = newarr[x];
    }

    return arr;
}


// 9. Add Seven to Most
function addSevenToMost(arr) {
    var newarr = [];
    newarr[0] = arr[0];
    for (var i = 1; i < arr.length; i++) {
        newarr[i] = arr[i] + 7;
    }
    return newarr;
}


// 10. Reverse Array 
function reverseArray(arr) {
    var temp = arr[0];
    for (var i = 0, x = (arr.length - 1); i < arr.length; i++, x--) {
        temp = arr[i];
        arr[i] = arr[x];
        arr[x] = temp;
    }
    return arr;
}


// 11. Outlook: Negative
function outlookNegative(arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        newarr[i] = -Math.abs(arr[i]);
    }
    return newarr;
}

// 12. Always Hungry
function alwaysHungry(arr) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'food') {
            console.log('yummy');
            counter += 1;
        }
    }
    if (counter === 0) {
        console.log("I'm hungry");
    }
    return;
}

// 13. Swap Toward the Center 
function swapTowardsCenter(arr) {
    var temp = arr[0];
    for (var i = 0, x = (arr.length - 1); i < x; i++, x--) {
        if (i === 0 || i % 2 === 0) {
            temp = arr[i];
            console.log(temp);
            arr[i] = arr[x];
            arr[x] = temp;
            console.log(arr);
        } 
    }
    return arr;
}


// 14. Scale the Array
function scaleArray(arr, y) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * y;
    }
    return arr;
}