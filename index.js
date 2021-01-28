function handlerProductChange(product, isIncrease) {

    const productInput = document.getElementById(product + "-count");
    const productCount = parseInt(productInput.value);
    // const productNewCount = productCount + 1;
    let productNewCount = productCount;
    if (
        isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (
        isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    // const productTotal = productNewCount * 59;
    let productTotal = 0;

    if (product == 'phone') {
        productTotal = productNewCount * 1219;
    }
    if (product == 'case') {
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + "-total").innerText = "$" + productTotal;

    calculateTotal();
}

// total price
function calculateTotal() {
    const phoneInput = document.getElementById("phone-count");
    const phoneCount = parseInt(phoneInput.value);


    const caseInput = document.getElementById("case-count");
    const caseCount = parseInt(caseInput.value);

    const totalPrice = phoneCount * 1219 + caseCount * 59;

    document.getElementById("total-price").innerHTML = "$" + totalPrice;

    const taxammount = parseInt(totalPrice * (10 / 100));
    document.getElementById("tax-ammount").innerHTML = "$" + taxammount;

    const grandtotal = totalPrice + taxammount;
    document.getElementById("grand-total").innerHTML = "$" + grandtotal;
}

// function handlerPhoneChange(isIncrease) {

//     const phoneInput = document.getElementById("phone-count");
//     const phoneCount = parseInt(phoneInput.value);

//     let phoneNewCount = phoneCount;

//     if (isIncrease == true) {
//         phoneNewCount = phoneCount + 1;
//     }
//     if (isIncrease == false && phoneNewCount > 0) {
//         phoneNewCount = phoneCount - 1;
//     }

//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById("phone-total").innerHTML = "$" + phoneTotal;
// }


/*
========================================================
                handlerProductChange
=========================================================
*/

/*
document.getElementById("case-increase").addEventListener("click", function () {
    handlerProductChange(true);
});

document.getElementById("case-decrease").addEventListener("click", function () {
    handlerProductChange(false);
});


function handlerProductChange(isIncrease) {
    const caseInput = document.getElementById("case-count");
    const caseCount = parseInt(caseInput.value);
    // const caseNewCount = caseCount + 1;
    let caseNewCount = caseCount;
    if (
        isIncrease == true) {
        caseNewCount = caseCount + 1;
    }
    if (
        isIncrease == false && caseCount > 0) {
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById("case-total").innerText = "$" + caseTotal;
}
*/


// document.getElementById("case-increase").addEventListener("click", function () {
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = "$" + caseTotal;

// });

// document.getElementById("case-decrease").addEventListener("click", function () {
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = "$" +caseTotal;
// });


/*
========================================================
                handlerPhoneChange
=========================================================
*/


/*

document.getElementById("phone-increase").addEventListener("click", function () {
    handlerPhoneChange(true);
});
document.getElementById("phone-decrease").addEventListener("click", function () {
    handlerPhoneChange(false);
});


function handlerPhoneChange(isIncrease) {

    const phoneInput = document.getElementById("phone-count");
    const phoneCount = parseInt(phoneInput.value);

    let phoneNewCount = phoneCount;

    if (isIncrease == true) {
        phoneNewCount = phoneCount + 1;
    }
    if (isIncrease == false && phoneNewCount > 0) {
        phoneNewCount = phoneCount - 1;
    }

    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById("phone-total").innerHTML = "$" + phoneTotal;
}

*/


// document.getElementById("phone-increase").addEventListener("click",function(){
//     const phoneInput = document.getElementById("phone-count");
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount + 1;
//     phoneInput.value = phoneNewCount;

//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById("phone-total").innerHTML = "$"+ phoneTotal;
// });

// document.getElementById("phone-decrease").addEventListener("click",function(){
//     const phoneInput = document.getElementById("phone-count");
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount - 1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;

//     document.getElementById("phone-total").innerHTML = "$"+ phoneTotal;

// });