document.getElementById('deposit-btn').addEventListener('click', function(){
    
    const depositFiled = document.getElementById('deposit-filed');
    const newDepositAmountString = depositFiled.value;

    //string theke number e rupantor

   const newDepositAmount = parseFloat (newDepositAmountString);

    const depositMoney = document.getElementById('money-deposit');
    const previousDepositTotalString = depositMoney.innerText;
    //string theke number e rupantor

    
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //jog kori
    const currentDepositAmount =  previousDepositTotal + newDepositAmount;

    //$00 te show koranor jonno

    depositMoney.innerText = currentDepositAmount;
    
    //main balance e deposit balance jog kori

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalAmountString = balanceTotalElement.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalAmountString);

    const currentBalance = balanceTotalAmount + newDepositAmount;

    balanceTotalElement.innerText = currentBalance;

    //input empty korar jonno
    depositFiled.value = '';



})