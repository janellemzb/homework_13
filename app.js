// HW 13, ex 1
let enterN = document.getElementById("enter")
let button1 = document.getElementById("button1")

button1.addEventListener('click', function() {
    let numEntered = parseInt(enterN.value)
    let startFac = 1

if (numEntered <= 0 || isNaN(numEntered)) {
    let notification = document.createElement("p")
    notification.textContent = "Please enter number greater than 0"
    document.body.appendChild(notification)
} else {
for (let i = numEntered; i>=1; i--) {
    startFac = startFac*i;}
    let notification = document.createElement("p")
    notification.textContent = "Result " + startFac
    document.body.appendChild(notification)}
})


// HW 13, ex 2
let constNum = 2;
let numPow = 2;

function findPower() {
    let findPowerResult = constNum;

    while (numPow > 1) {
        findPowerResult *= constNum;
        numPow--;
    }

    let result2 = document.getElementById("result2")
    result2.textContent = "Result: " + findPowerResult;
}
findPower();


// HW 13, ex 3
let enteredNumber = document.getElementById("enter2")
let button2 = document.getElementById("button2")
let result3 = document.getElementById("result3") 

button2.addEventListener('click', function () {
    let entNum = parseInt(enteredNumber.value)
    let minDivider = findMinDivider(entNum)

    if (minDivider !== -1) {
        result3.textContent = "Min divider is: " + minDivider
    } else {
        result3.textContent = "ERROR";
    }
})

function findMinDivider(num) {
    if (num < 2) {
        return -1
    }
    for (let nN = 2; nN <= Math.sqrt(num); nN++) {
        if (num % nN === 0) {
            return nN
        }
    }
    return num; 
}

// HW 13, ex 4
let enNumber = document.getElementById("enter4")
let button4 = document.getElementById("button4")
let result4 = document.getElementById("result4")

function findDividers(numberN) {
    if (numberN < 1) {
        return [1];
    }
    
    let dividers = [];
    for (let numN = 1; numN <= Math.sqrt(numberN); numN++) {
        if (numberN % numN === 0) {
            dividers.push(numN)
            if (numN !== numberN / numN) {
                dividers.push(numberN / numN)
            }
        }
    }
    return dividers
}

button4.addEventListener('click', function () {
    let enteredNumberTask4 = parseInt(enNumber.value)
    let dividers = findDividers(enteredNumberTask4)

    if (dividers.length > 1) {
        result4.textContent = "Dividers are: " + dividers.join(", ")
    } else {
        result4.textContent = "ERROR"
    }
})

// HW 13, ex 5
let txtEnt = document.getElementById("enter5")
let button5 = document.getElementById("button5")
let result5 = document.getElementById("result5")

function multNum() {
    let numEnt = parseInt(txtEnt.value);
    let numMult = 0;
    for (let m = 1; m <= numEnt; m++) {
        numMult += m
    }
    result5.textContent = 'Sum result: ' + numMult
}
button5.addEventListener('click', multNum)

// HW 13, ex 6
let entNumber6 = document.getElementById("enter6");
let button6 = document.getElementById("button6");
let result6 = document.getElementById("result6");

function multQuad() {
    let numEntForQuad = parseInt(entNumber6.value);
    let numMultQuad = 0;
    for (let a = 1; a <= numEntForQuad; a++) {
        numMultQuad += a * a;
    }
    result6.textContent = 'Sum of quad result: ' + numMultQuad;
}

button6.addEventListener('click', multQuad);

// HW 13, ex 7
let entNumber7 = document.getElementById("enter7")
let button7 = document.getElementById("button7")
let result7 = document.getElementById("result7")

function checkNatural() {
    let checkNumEnt = parseInt(entNumber7.value)
    function isPrime() {
        if (checkNumEnt <= 1) return false;
      for (let m = 2; m <= Math.sqrt(checkNumEnt); m++) {
        if (checkNumEnt % m === 0) {
          return false
        }
      }
      return true
    }
    if (isPrime(checkNumEnt)) {
        result7.textContent = 'TRUE'
    } else {
        result7.textContent = 'FALSE'
    }
}
button7.addEventListener('click', checkNatural)


