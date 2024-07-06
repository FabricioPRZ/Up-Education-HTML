function togglePassword() {
    var passwordField = document.getElementById("password");
    var toggleIcon = passwordField.nextElementSibling.querySelector('i');
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
        
    } else {
        passwordField.type = "password";
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    }
}

function togglePassword1() {
    var passwordField1 = document.getElementById("password1");
    var toggleIcon1 = passwordField1.nextElementSibling.querySelector('i');
    if (passwordField1.type === "password") {
        passwordField1.type = "text";
        toggleIcon1.classList.remove('fa-eye-slash');
        toggleIcon1.classList.add('fa-eye');
    } else {
        passwordField1.type = "password";
        toggleIcon1.classList.remove('fa-eye');
        toggleIcon1.classList.add('fa-eye-slash');
    }
}
