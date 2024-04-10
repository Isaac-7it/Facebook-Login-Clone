"use strict";

const passwordView = document.querySelector(".fa-eye");
let passwordInput;
let slash;

passwordView.addEventListener("click", function () {
  changeTypePassword();

  slash = document.querySelector(".slash");
  slash.classList.toggle("display");
});

const changeTypePassword = function () {
  passwordInput = document.getElementById("password");
  passwordInput.type = passwordInput.type === "text" ? "password" : "text";
};
