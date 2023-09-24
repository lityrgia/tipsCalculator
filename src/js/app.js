const billAmount = document.querySelector(".form__amount")
const countGuests = document.querySelector(".form__guests")
const serviceQuality = document.querySelector(".form__quality")

function tipsShow() {
    switch (serviceQuality.value) {
        case 'bad':
            if (!isNaN(billAmount.value) && !isNaN(countGuests.value)) {
                alert(+billAmount.value / 100 * 5 / +countGuests.value + " for each")
            } else {
                alert("Isn't number")
            }
            break;
        case 'normal':
            if (!isNaN(billAmount.value) && !isNaN(countGuests.value)) {
                alert(+billAmount.value / 100 * 15 / +countGuests.value + " for each")
            } else {
                alert("Isn't number")
            }
            break;
        case 'excelent':
            if (!isNaN(billAmount.value) && !isNaN(countGuests.value)) {
                alert(+billAmount.value / 100 * 30 / +countGuests.value + " for each")
            } else {
                alert("Isn't number")
            }
            break;
    }
}