"use strict";
const submitBtn = document.querySelector("form .submit-btn");
const fullModule = document.querySelector(".full-module");
const inputEl = document.getElementById("input");
const formContent = document.querySelector(".content-and-form");
const formImg = document.querySelector(".image");
const formMobileImg = document.querySelector(".image-mobile");
const formApprovedContent = document.querySelector(".form-approved-content");
const errorText = document.querySelector(".error-text");
const description = document.querySelector(".submission-description");
function isEmailValid(email) {
  const atPos = email.indexOf("@");
  const dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}
fullModule.addEventListener("click", function (e) {
  e.preventDefault();

  console.log(e.target);
  if (e.target === submitBtn) {
    const email = inputEl.value;
    if (isEmailValid(email)) {
      fullModule.classList.remove("form-pending");
      formContent.classList.add("hidden");
      formImg.classList.add("hidden");
      formMobileImg.classList.add("hidden");
      formApprovedContent.classList.remove("hidden");
      description.textContent = ` A confirmation email has been sent to ${email}.
            Please open it and click the button inside to confirm your subscription.
`;
    } else {
      inputEl.classList.add("error-input");
      errorText.classList.remove("hidden-text");
    }
  }
  if (
    e.target === document.querySelector(".form-approved-content .submit-btn")
  ) {
    location.reload();
  }
});
