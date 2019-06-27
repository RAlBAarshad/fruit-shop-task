function total() {
    const totalApplePrice = apple * 10;
    const totalOrangePrice = orange * 15;
    const totalBananaPrice = banana * 7;
    let bill = parseInt(document.querySelector('.bill input').value);

    bill = totalApplePrice + totalOrangePrice + totalBananaPrice;
    document.querySelector('.bill input').value = bill;
}

// apples

function addApple() {

    let totalmoney = parseInt(document.querySelector('.total-money input').value);
    let bill = parseInt(document.querySelector('.bill input').value);

    if (totalmoney <= bill) {
        alert("You have not enough money to buy Apples");
    } else {
        document.querySelector('#total-apples').value = ++apple;
        updateBill();
    }
}
let apple = 0;

function removeApple() {
    apples < 1 ? apples = 1 : '';
    document.querySelector('#total-apples').value = --apple;
    updateBill();
}


// oranges

function addOrange() {
    let totalmoney = parseInt(document.querySelector('.total-money  input').value);
    let bill = parseInt(document.querySelector('.bill input').value);

    if (totalmoney <= bill) {
        alert("You have not enough money to buy Oranges");
    } else {
        document.querySelector('#total-oranges').value = ++orange;
        updateBill();
    }
}
let orange = 0;

function removeOrange() {
    orange < 1 ? orange = 1 : '';

    document.querySelector('#total-oranges').value = --orange;
    updateBill();
}


//  bananas
let banana = 0;

function addBanana() {
    let totalmoney = parseInt(document.querySelector('.total-money  input').value);
    let bill = parseInt(document.querySelector('.bill input').value);

    if (totalmoney <= bill) {
        alert("You have not enough money to buy Bananas");
    } else {
        document.querySelector('#total-bananas').value = ++banana;
        updateBill();
    }

}

function removeBanana() {
    banana <= 1 ? banana = 1 : '';
    document.querySelector('#total-bananas').value = --banana;
    updateBill();
}