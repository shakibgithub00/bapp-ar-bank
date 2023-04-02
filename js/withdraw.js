document.getElementById('withdraw-btn').addEventListener('click', function(){
    
    const withdrawFiled = document.getElementById('withdraw-filed');
    const withdrawFiledAmountString = withdrawFiled.value;
    const withdrawFiledAmount = parseFloat(withdrawFiledAmountString);
    
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalAmountString = withdrawTotalElement.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalAmountString);
    const currentWithdrawAmount = withdrawTotalAmount + withdrawFiledAmount;


    withdrawTotalElement.innerText = currentWithdrawAmount;

    //input empty korar jonno
    withdrawFiled.value = '';

    //balance

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalAmountString = balanceTotalElement.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalAmountString);

    const currentBalance = balanceTotalAmount - currentWithdrawAmount;

    balanceTotalElement.innerText = currentBalance;


    

})