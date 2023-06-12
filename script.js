document.getElementById('validation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Reset error messages
    resetErrorMessages();

    // Fetch form values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Validate form fields
    var isValid = true;

    if (fullName.length < 5) {
        document.getElementById('fullNameError').textContent = 'Name must have at least 5 characters';
        isValid = false;
    }

    if (email.indexOf('@') === -1) {
        document.getElementById('emailError').textContent = 'Enter a valid email address';
        isValid = false;
    }

    if (phoneNumber === '1234567890' || phoneNumber.length !== 10 || isNaN(phoneNumber)) {
        document.getElementById('phoneNumberError').textContent = 'Enter a valid 10-digit phone number';
        isValid = false;
    }

    if (password.length < 8 || password === 'password' || password === fullName) {

        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long and cannot be "password" or the user\'s name';
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    }

    // If any of the validations fail it prevents form submission of the form.
    if (!isValid) {
        return;
    }

    // Form submission logic goes here
    // You can perform additional actions like sending data to the server

    // Reset form
    document.getElementById('validation-form').reset();
});

// Function to reset error messages
function resetErrorMessages() {
    document.getElementById('fullNameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneNumberError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
}