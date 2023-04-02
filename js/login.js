document.getElementById('submit-btn').addEventListener('click', function(){
    const emailFiled = document.getElementById('user-mail');
    const email = emailFiled.value;

    const passwordFiled = document.getElementById('user-password');
    const password = passwordFiled.value;
    
    if(email === 'bapparbank099@gmail.com' && password === 'bapparbank' ){
        window.location.href  = 'bank.html';
    }
    else{
        alert('Tui vule gesos tore tejjo putro korlam')
    }
})