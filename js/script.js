const passwordInput = document.querySelector("#user-password");
const passwordConfirmInput = document.querySelector("#user-password-confirm");
const passwordValidation = document.querySelector(".password-match");
const btnSubmit = document.querySelector("#btn-form-submit");
const passwordDiv = document.querySelector("#password-inputs");

passwordDiv.addEventListener('input', confirm_password)

function confirm_password() {
    let pass = passwordInput.value
    let passConfirm = passwordConfirmInput.value

    if (pass !== passConfirm) {
        btnSubmit.disabled = true;
        passwordValidation.textContent = "* Passwords do not match"
    } else {
        btnSubmit.disabled = false;
        passwordValidation.textContent = ""
    }
}