

const LoginFormRef = document.querySelector(".login-form");

LoginFormRef.addEventListener("submit", onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;

  if (email.trim().length === 0 || password.trim().length === 0) {
    alert("Заповніть будь ласка всі поля!");
    return;
  }
  // if (!email || !password) {
  //   alert("Заповніть будь ласка всі поля!");
  //   return;
  // }

  const formData = {
    email,
    password,
  };

  console.log(formData);
  e.currentTarget.reset();
}
