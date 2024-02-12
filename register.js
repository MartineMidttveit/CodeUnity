const passwordInput = document.querySelector('input[type="password"]');
const confirmPasswordInput = document.querySelector("#confirmPassword");
const passwordRequirements = document.querySelector("#passwordRequirements");
const passwordLength = document.querySelector("#passwordLengthIcon");
const passwordFormat = document.querySelector("#passwordFormatIcon");
const incorrectPassword = document.querySelector("#incorrectPassword");
const passwordSymbol = document.getElementById('passwordSymbol');

passwordInput.addEventListener('focus', function () {
    passwordRequirements.style.display = 'flex';
});

passwordInput.addEventListener('input', function () {
    const password = this.value;
    const hasValidLength = password.length >= 8;
    const hasValidFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    passwordLength.style.backgroundColor = hasValidLength ? "#34D399" : "#EF4444";
    passwordFormat.style.backgroundColor = hasValidFormat ? "#34D399" : "#EF4444";
    passwordSymbol.style.backgroundColor = hasSpecialCharacter ? '#34D399' : '#EF4444';
});

confirmPasswordInput.addEventListener('input', function () {
    const confirmPassword = this.value;
    const password = passwordInput.value;
    incorrectPassword.style.display = password !== confirmPassword ? "block" : "none";
});

confirmPasswordInput.addEventListener('blur', function () {
    const password = passwordInput.value;
    const confirmPassword = this.value;

    if (password === '' && confirmPassword === "") {
        setTimeout(function () {
            incorrectPassword.style.display = "none";
        }, 1000);
    }
});