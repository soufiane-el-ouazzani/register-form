const form= document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//show input error message 
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small =formControl.querySelector('small');
    small.innerText = message;
}

//show succes outline 
function showSucces(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

//check email is valid 
function isValidEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

//check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input) {
         if(input.value.trim() === ''){
            showError(input, `${getfieldName(input)} is required`);
         }else {
            showSucces(input);
         }
    });
}

//check length 
function checklength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getfieldName(input)} is less than ${min}`);
    } else if(input.value.length > max){
        showError(input, `${getfieldName(input)} is more than ${max}`);
    };
}

// Get fieldname
function getfieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checklength(username, 4,15);
    checklength(password, 8,20);
});
