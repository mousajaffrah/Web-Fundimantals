var arr = [5, 7, 4, 9, 1, -1, -5, -3];
var arrtwo = [];
var y = 2;

function count() {
    for (var i = 1; i <= 255; i++) {
        arrtwo.push(i);
    }

}
count();
console.log(arrtwo);


var sum = 0;

function evennums() {
    for (var i = 0; i <= 1000; i++) {
        if (i % 2 == 0) {
            sum += i

        }
    }
    return sum;
}
sum = evennums();
console.log(sum);


var sum = 0;

function oddnums() {
    for (var i = 1; i <= 5000; i++) {
        if (i % 2 == 1) {
            sum += i

        }
    }
    return sum;
}
sum = oddnums();
console.log(sum);


function arrsum() {
    var arraysum = 0;
    for (var i = 0; i < arr.length; i++) {
        arraysum += arr[i]
    }
    return arraysum;
}
arraysum = arrsum();
console.log(arraysum);

function max() {
    var maxval = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxval) {
            maxval = arr[i]
        }
    }
    return maxval;
}
maxval = max();
console.log(maxval);


function avg() {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length
}
var avg = avg();
console.log(avg);


var oddarr = [];

function oddarray() {

    for (var i = 0; i <= 50; i++) {
        if (i % 2 == 1) {
            oddarr.push(i);
        }
    }
}
oddarray();
console.log(oddarr);


var counter = 0;

function greaterthan(arr, y) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            counter++
        }
    }

    return counter;
}




counter = greaterthan(arr, y);
console.log(counter);




function squares() {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }

    return arr
}




arr = squares();
console.log(arr);


function negatives() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0
        }
    }

    return arr;
}




arr = negatives();
console.log(arr);




var newarr = [];

function stats() {
    var max = arr[0];
    var min = arr[0];
    var avg = 0;
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
        avg += arr[i];

    }
    newarr.push(max, min, avg / arr.length)
    return newarr;
}
newarr = stats();
console.log(newarr);


function swap() {
    arr[0] = arr[arr.length - 1]
}
swap();
console.log(arr)



function numtostr() {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
}
numtostr();
console.log(arr);