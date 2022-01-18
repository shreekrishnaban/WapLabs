window.onload = pageLoad;

var rudyTimer = (function() {
    let timer = null; // stores ID of interval timer

    function rudy() { // called each time the timer goes off
        document.getElementById("output").innerHTML += "Rudy!";
    }

    return function delayMsg2() {
        if (timer === null) {
            timer = setInterval(rudy, 1000);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }


})();


function pageLoad() {
    document.getElementById("rudyButton").onclick = rudyClicked;
    document.getElementById("btnCreateAccount").onclick = btnCreateAccountClicked;
    document.getElementById("rudyButton").onclick = rudyClicked;
}

function rudyClicked() {
    rudyTimer();
}


var accountInfoList = [];

var accountModule = (function() {

    var bankAccount = {};

    function createAccount(accountName, deposit) {
        var newAccount = Object.create(bankAccount);
        newAccount.accountName = accountName;
        newAccount.deposit = parseFloat(deposit);
        accountInfoList.push(newAccount);
    }


    return {
        createNewAccount: function(accountName, deposit) {
            createAccount(accountName, deposit);
        }
    }



})();

function btnCreateAccountClicked() {
    accountModule.createNewAccount(document.getElementById("accountName").value, document.getElementById("depositAmount").value)
    refreshList();
}

function refreshList() {
    let newBankAccount = accountInfoList[accountInfoList.length - 1];
    document.getElementById("bankAccountOutput").value +=
        "\n" + "Account Name : " + newBankAccount.accountName + " Balance : " + newBankAccount.deposit;
}