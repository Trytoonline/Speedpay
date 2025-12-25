function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function login() {
  showPage('homePage');
}

function logout() {
  showPage('loginPage');
}

function togglePassword() {
  const pass = document.getElementById("password");
  pass.type = pass.type === "password" ? "text" : "password";
}

function copyCode() {
  const code = document.getElementById("inviteCode").innerText;
  navigator.clipboard.writeText(code);
  alert("Invite Code Copied");
}
