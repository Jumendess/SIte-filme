
//////////////////////////////////////////////////////////////////////////////
//Tela de inicio


function validateAndLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Por favor, preencha todos os campos.");
  } else {
    // alert(`Email: ${email}\nSenha: ${password}`);
    window.location.href = "teste.html"; // Redireciona para a página index.html
  }
}

function register() {
  // Lógica de registro aqui
  window.location.href = "registro.html"; // Redireciona para a página de registro
}

const showPasswordCheckbox = document.getElementById("showPassword");
const passwordInput = document.getElementById("password");

showPasswordCheckbox.addEventListener("change", function () {
  if (showPasswordCheckbox.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});

/////////////////////////////////////////////////////////////////////////////

// Tela de registro

function validateAndRedirect() {
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const agreeTermsCheckbox = document.getElementById("agreeTerms");

  if (fullName === "" || email === "" || password === "" || !agreeTermsCheckbox.checked) {
    alert("Por favor, preencha todos os campos e aceite os termos.");
  } else {
    alert(`Nome Completo: ${fullName}\nEmail: ${email}\nSenha: ${password}`);
    window.location.href = "IndexInicio.html"; // Redireciona para a página IndexInicio.html
  }
}

//////////////////////////////////////////////////////////////////////////////
