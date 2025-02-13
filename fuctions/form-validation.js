function updatePhoneCode() {
    const country = document.getElementById("country").value;
    const phoneCode = {
        "russia": "+7",
        "uzbekistan": "+998",
        "kazakhstan": "+7",
        "philippines": "+63",
        "georgia": "+995",
        "kyrgyzstan": "+996",
        "egypt": "+20"
    };
    document.getElementById("phoneCode").textContent = phoneCode[country] || "+___";
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".application-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form from submitting
        let isValid = true;

        // Get input values
        const fullName = document.getElementById("fullName");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const country = document.getElementById("country");

        // Reset previous error styles
        document.querySelectorAll(".error").forEach(el => el.remove());

        // Name Validation
        if (fullName.value.trim() === "") {
            showError(fullName, "Full Name is required");
            isValid = false;
        }

        // Email Validation
        if (!validateEmail(email.value)) {
            showError(email, "Enter a valid email address");
            isValid = false;
        }

        // Country Validation
        if (country.value === "") {
            showError(country, "Please select a country");
            isValid = false;
        }

        // Phone Number Validation
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone.value)) {
            showError(phone, "Enter a valid 10-digit phone number");
            isValid = false;
        }

        // If all inputs are valid, submit the form
        if (isValid) {
            alert("Thank you! Your application has been submitted.");
            form.reset(); // Reset form after successful submission
            document.getElementById("phoneCode").textContent = "+___"; // Reset phone code
        }
    });

    function showError(input, message) {
        const errorMsg = document.createElement("p");
        errorMsg.classList.add("error");
        errorMsg.style.color = "red";
        errorMsg.style.fontSize = "12px";
        errorMsg.textContent = message;
        input.parentNode.appendChild(errorMsg);
    }

    function validateEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }
});