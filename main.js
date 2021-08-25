const billInput = document.getElementById('bill-amount');
const buttonOne = document.getElementById('5%');
const buttonTwo = document.getElementById('10%');
const buttonThree = document.getElementById('15%');
const buttonFour = document.getElementById('25%');
const buttonFive = document.getElementById('50%');
const buttonSix = document.getElementById('custom-button');
const people = document.getElementById('people');
const perPeople = parseInt(people.value)
// Tip
const tipText = document.getElementById('tip-amount');
const tipAmount = parseFloat(tipText);
// Toral
const totalAmountText = document.getElementById('total-amount');
const totalAmount = parseFloat(totalAmountText.innerText);

const resetButton = document.getElementById('reset');












billInput.addEventListener('keyup', function () {
    const billAmount = parseFloat(billInput.value);
    discount()
    const total = totalAmount + billAmount;
    const tipTotal = total * 10 / 100;
    tipTotal.toFixed(2)



    if (billInput.value == 0) {
        return totalAmountText.innerText = 0;
    }
    if (billInput.value.length <= 4) {

        totalAmountText.innerText = total + tipTotal;

    }
    else {
        alert('Too long amount')
        billInput.style.outlineColor = 'red';

    }



    tipText.innerText = tipTotal;



})






function discount(parcent) {
    const billAmount = parseFloat(billInput.value);
    const total = totalAmount + billAmount;
    const tipTotal = total * parcent / 100;
    tipTotal.toFixed(2)
    totalAmountText.innerText = total + tipTotal;
    tipText.innerText = tipTotal;


}


function perPerson() {
    const billAmount = parseFloat(billInput.value);
    
    const total = totalAmount + billAmount;
    const tipTotal = total * 10 / 100;
    tipTotal.toFixed(2)
  
    const lastTip = (tipTotal / people.value).toFixed(0);
    const lastTotal = (total / people.value).toFixed(0);

    console.log(lastTip,lastTotal)

    if (people.value == 0) {
        totalAmountText.innerText = total + tipTotal;
        tipText.innerText = tipTotal;
    }
    if (people.value > 0) {
        totalAmountText.innerText = parseInt(lastTotal) + parseInt(lastTip);
        tipText.innerText = lastTip;
    }
    
}




people.addEventListener('keyup', function () {
    perPerson();

})






buttonOne.addEventListener('click', function () {
    perPerson();
    discount(5);

})
buttonTwo.addEventListener('click', function () {
    perPerson();
    discount(10);

})
buttonThree.addEventListener('click', function () {
    perPerson();
    discount(15);
    
})
buttonFour.addEventListener('click', function () {
    perPerson();
    discount(25);
})
buttonFive.addEventListener('click', function () {
    perPerson();
    discount(50)
})
buttonSix.addEventListener('keyup', function () {
    buttonSixValue = parseFloat(buttonSix.value);
    if (buttonSix.value > 0) {
        discount(buttonSixValue);
        perPerson();
    }
    else {
        discount(0);
        perPerson();
    }

})



resetButton.addEventListener('click', function () {
    tipText.innerText = '0';
    totalAmountText.innerText = '0'
})