console.log('This is project 4');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phon = document.getElementById('phon');
let nameValid = false;
let  emailValid = false;
let phonValid = false;
// console.log(name, email, phon);
name.addEventListener('blur', ()=>{
    console.log('name is blurred');
    // validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-z]){0,10}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your name is valid');
        name.classList.remove('is-invalid');
        nameValid = true;
    }
    else{
        console.log('your name is not valid');
        name.classList.add('is-invalid');
        
    }

})
email.addEventListener('blur', ()=>{
    console.log('email is blurred');
    // validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your email is valid');
        email.classList.remove('is-invalid');
        emailValid = true;
    }
    else{
        console.log('your email is not valid');
        email.classList.add('is-invalid');
        
    }
})
phon.addEventListener('blur', ()=>{
    console.log('phon is blurred');
    // validate phon here
    let regex = /^([0-9]){10}$/;
    let str = phon.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your phon is valid');
        phon.classList.remove('is-invalid');
        phonValid = true;
    }
    else{
        console.log('your phon is not valid');
        phon.classList.add('is-invalid');
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('you cilcked on submit');
    // submit your form here
    if (validEmail && validUser && validPhon) {
        console.log('Phon, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        failure.classList.remove('show');

    }
    else{
        console.log('one of Phon, email and user are not valid. Hance not Submitting the form. Place correct the error and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        success.classList.remove('show');
    }
    
})
