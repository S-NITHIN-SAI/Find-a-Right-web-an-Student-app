// login.js
document.addEventListener("DOMContentLoaded", () => {
  const phoneInput = document.getElementById("phoneInput");
  const sendOtpBtn = document.getElementById("sendOtpBtn");
  const otpGroup = document.getElementById("otp-group");
  const otpInput = document.getElementById("otpInput");
  const verifyOtpBtn = document.getElementById("verifyOtpBtn");
  const googleSignInBtn = document.getElementById("googleSignInBtn");
  const loginMessage = document.getElementById("loginMessage");

  let generatedOtp = "";

  sendOtpBtn.addEventListener("click", () => {
    const phone = phoneInput.value.trim();
    if (!validatePhone(phone)) {
      loginMessage.textContent = "Please enter a valid phone number.";
      return;
    }
    generatedOtp = "123456"; // Fixed OTP for demo
    loginMessage.style.color = "#e50914";
    loginMessage.textContent = "OTP sent! Please check your phone.";
    otpGroup.classList.remove("hidden");
  });

  verifyOtpBtn.addEventListener("click", () => {
    const enteredOtp = otpInput.value.trim();
    if (enteredOtp === generatedOtp) {
      loginMessage.style.color = "green";
      loginMessage.textContent = "OTP verified! Redirecting...";
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    } else {
      loginMessage.style.color = "red";
      loginMessage.textContent = "Incorrect OTP. Please try again.";
    }
  });

  googleSignInBtn.addEventListener("click", () => {
    loginMessage.style.color = "green";
    loginMessage.textContent = "Google sign-in successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  });

  function validatePhone(phone) {
    const regex = /^[0-9]{10,15}$/;
    return regex.test(phone);
  }
});

