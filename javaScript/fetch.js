// getting the values of the sign up

let signBtn = document.getElementById('signUpBtn');
signBtn.addEventListener('click', () => {
    let signUpname = document.getElementById('signUpname').value;
    let signUpemail = document.getElementById('signUpemail').value;
    let signUpnumber = document.getElementById('signUpnumber').value;
    let signUptime = document.getElementById('signUptime').value;
    let signUpadd = document.getElementById('signUpadd').value;
    obj = { name: signUpname, email: signUpemail, phone: signUpnumber, time: signUptime, address: signUpadd }
    console.log(obj);
})


// getting the values of the contact us 

let contSubmitBtn = document.getElementById('contSubmitBtn');
contSubmitBtn.addEventListener('click', () => {
    let contName = document.getElementById('contName').value;
    let contEmail = document.getElementById('contEmail').value;
    let contNumber = document.getElementById('contNumber').value;
    let contMessage = document.getElementById('contMessage').value;

    contactObj = { name: contName, email: contEmail, number: contNumber, message: contMessage }
    console.log(contactObj);
})