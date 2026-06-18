const userName = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");

function hideError(input, errorId) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.style.display = "none";
        input.classList.remove("error");
    }
}

userName.addEventListener("input", () => hideError(userName, "name-error"));
email.addEventListener("input", () => hideError(email, "e-error"));
pass.addEventListener("input", () => hideError(pass, "p-error"));

function vali(e) {
    e.preventDefault();
    let isValid = true;

    if (userName.value === "") {
        const nameError = document.getElementById("name-error");
        nameError.style.display = "block";
        userName.classList.add("error");
        isValid = false;
    } else {
        hideError(userName, "name-error");
    }

    if (email.value === "") {
        const emailError = document.getElementById("e-error");
        emailError.style.display = "block";
        email.classList.add("error");
        isValid = false;
    } else {
        hideError(email, "e-error");
    }

    if (pass.value === "") {
        const passError = document.getElementById("p-error");
        passError.style.display = "block";
        pass.classList.add("error");
        isValid = false;
    } else {
        hideError(pass, "p-error");
    }

    if (isValid) {
        setTimeout(() => {
            window.location.href = "home-page.html"; // اسم الصفحة الثانية هنا
        }, 2000); // هذا يجعل النموذج يرسل إذا كانت جميع الحقول صحيحة
    }
}
form.addEventListener("submit", vali);

let btn = document.querySelector("button");
window.onscroll = function () {
    if (window.scrollY >= 600)
        btn.style.display = "block";
    else
        btn.style.display = "none";
}
btn.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}
