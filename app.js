const initialPrice  = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const showBtn = document.querySelector("#show-btn");
const outputEl = document.querySelector("#output");


function showBtnHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);

}

function showOutput(msg){
    outputEl.innerText = msg;
}

function calculateProfitAndLoss(initial, qty, current){
    if(initial >0 && qty>0 && current >0){
        if(initial>current){
        var loss = (initial-current)*qty;
        var lossPercentage = (loss/initial)*100;
        showOutput("Hey the loss is " +loss+"and the loss percentage is "+lossPercentage+"%");

    }else if(current>initial){
        var profit = (current-initial)*qty;
        var profitPercentage = (profit/initial)*100;
        showOutput("Hey the profit is " +profit+" and the profit percentage is "+profitPercentage+"%");
    }else{

        showOutput("No pain no gain and No gain No pain");

    }
   }else{
       showOutput("Please enter positive values as input");
       
   }

    
    
}


showBtn.addEventListener("click", showBtnHandler);
