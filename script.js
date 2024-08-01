const mainForm = document.getElementById("mainForm");
const fullName = document.getElementById("fullName");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("Password");
const confirmPassword = document.getElementById("confirmPassword");
const terms = document.getElementById("terms");
const submitBtn = document.getElementById("submitBtn");
const errorMessage = document.getElementById("errorMessage");

mainForm.addEventListener("submit", (e) => {
  /* validation checks */
  if (username.value.length < 6) {
    e.preventDefault();
    errorMessage.innerText = "Username must be 6 or more characters.";
  }

  console.log(password.value);
  console.log(password.value.length);

  if (password.value.length < 6) {
    e.preventDefault();
    errorMessage.innerText = "Password must be 6 or more characters.";
  }

  if (!/[A-Z]/.test(password.value)) {
    e.preventDefault();
    errorMessage.innerText =
      "Password must contain at least one capital letter.";
  }

  if (password.value !== confirmPassword.value) {
    e.preventDefault();
    errorMessage.innerText = "Passwords did not match.";
  }

  if (!terms.checked) {
    e.preventDefault();
    errorMessage.innerText =
      "Please agree to our website's terms and conditions.";
  }
});
