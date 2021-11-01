var initialPrice = document.querySelector("#initial-price");
var quantityOfStocks = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var showBtn = document.querySelector("#show-btn");
var outputBox = document.querySelector("#output-box");

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        showOutput(`Hey the loss is ${loss} and the percent is ${lossPercentage} %`);

    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        showOutput(`Hey the profit is ${profit} and the percent is ${profitPercentage} %`);

    } else {
        showOutput("No pain no gain and no gain no pain");
    }   
}


function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(quantityOfStocks.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

showBtn.addEventListener("click", submitHandler);

function showOutput(message) {
    outputBox.innerHTML = message;
}

