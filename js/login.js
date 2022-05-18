const close = document.querySelector(".close");
const SignUp = document.querySelector(".login");
const clickLogin = document.querySelector(".click-Login");

window.onclick = function (event) {
  if (event.target == SignUp) {
    SignUp.style.display = "none";
  }
};

function MyClick() {
  const pass = document.querySelector(".input-password");
  const eyeOff = document.querySelector(".img-eye-off");
  const eye = document.querySelector("#img-eye");
  if (pass.type === "password") {
    pass.type = "text";
    pass.style.top = "45%";
    pass.style.left = "40px";
    eyeOff.style.display = "block";
    eye.style.display = "none";
  } else {
    pass.type = "password";
    eye.style.display = "block";
    eyeOff.style.display = "none";
  }
}
