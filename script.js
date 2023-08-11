const totalDeposit = document.getElementById("totalDeposit")
const totalWithdraw = document.getElementById("totalWithdraw")
const totalBalance = document.getElementById("totalBalance")
const depositInput = document.getElementById("depositInput")
const withdrawInput = document.getElementById("withdrawInput")

function deposit(){
    let depositInputValue = parseInt(depositInput.value)
    let totalDepositPresent = parseInt(totalDeposit.innerText)
    let totalBalancePresent = parseInt(totalBalance.innerText)
    totalDeposit.innerText = depositInputValue + totalDepositPresent
    totalBalance.innerText = totalBalancePresent + depositInputValue
}

function withdraw(){
    let withdrawInputValue = parseInt(withdrawInput.value)
    let totalWithdrawPresent = parseInt(totalWithdraw.innerText)
    let totalBalancePresent = parseInt(totalBalance.innerText)
    if(totalBalancePresent<withdrawInputValue){
        alert("Insufficient Balance")
    }
    else{
        totalWithdraw.innerText = withdrawInputValue + totalWithdrawPresent
        totalBalance.innerText = totalBalancePresent - withdrawInputValue

    }
}