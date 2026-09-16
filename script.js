// Wait until the webpage has loaded
document.addEventListener("DOMContentLoaded", function () {

    // Mobile navigation menu
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Form handling
    const forms = document.querySelectorAll("form");

    forms.forEach(function (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const formName = form.getAttribute("data-form");

            if (formName === "login") {
                alert("Login demonstration submitted successfully.");
            } 

            else if (formName === "signup") {
                alert("Your sign-up form has been submitted for demonstration.");
            } 

            else if (formName === "appointment") {
                alert("Your appointment request has been received for demonstration.");
            } 

            else if (formName === "contact") {
                alert("Your message has been submitted for demonstration.");
            } 

            else if (formName === "forgot-password") {
                alert("Password reset demonstration submitted.");
            } 

            else {
                alert("Your form has been submitted for demonstration.");
            }

            form.reset();
        });
    });

});