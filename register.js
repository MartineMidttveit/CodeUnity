const passwordInput = document.querySelector('input[type="password"]');
const confirmPasswordInput = document.querySelector("#confirmPassword");
const passwordRequirements = document.querySelector("#passwordRequirements");
const passwordLength = document.querySelector("#passwordLengthIcon");
const passwordFormat = document.querySelector("#passwordFormatIcon");
const incorrectPasswordMessage = document.querySelector("#incorrectPassword");

passwordInput.addEventListener('focus', function () {
    passwordRequirements.style.display = 'flex';
});

passwordInput.addEventListener('input', function () {
    const password = this.value;
    const hasValidLength = password.length >= 8;
    const hasValidFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(password);

    passwordLength.style.backgroundColor = hasValidLength ? "#34D399" : "#EF4444";
    passwordFormat.style.backgroundColor = hasValidFormat ? "#34D399" : "#EF4444";
});

confirmPasswordInput.addEventListener('input', function () {
    const confirmPassword = this.value;
    const password = passwordInput.value;
    incorrectPasswordMessage.style.display = password !== confirmPassword ? "block" : "none";
});

confirmPasswordInput.addEventListener('blur', function () {
    const password = passwordInput.value;
    const confirmPassword = this.value;

    if (password === '' && confirmPassword === "") {
        setTimeout(function () {
            incorrectPasswordMessage.style.display = "none";
        }, 1000);
    }
});