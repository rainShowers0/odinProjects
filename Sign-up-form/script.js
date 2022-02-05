const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const passwordContainer = document.getElementById('passwordContainer');
const form = document.getElementById('form')

let message = document.createElement('p');
message.textContent = '';
message.style.color = 'red';
passwordContainer.append(message);
form.addEventListener('submit', (e) => {

    if (password.value !== confirmPassword.value) {
        message.textContent = 'Passwords do not match'
        e.preventDefault();
    }

    
})