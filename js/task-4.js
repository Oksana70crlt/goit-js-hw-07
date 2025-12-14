const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  // додаємо слухача події submit
  event.preventDefault();
  // відміна стандартної поведінки форми

  const emailValue = loginForm.elements.email.value.trim();
  // отримуємо значення поля email

  const passwordValue = loginForm.elements.password.value.trim();
  // отримуємо значення поля password

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  // створюємо об'єкт з даними форми
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  loginForm.reset();
  // скидаємо значення форми
});
