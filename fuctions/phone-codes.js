function updatePhoneCode() {
    const country = document.getElementById("country").value;
    const phoneCode = {
        "russia": "+7",
        "uzbekistan": "+998",
        "kazakhstan": "+7",
        "philippines": "+63",
        "georgia": "+995",
        "egypt": "+20"
    };
    document.getElementById("phoneCode").textContent = phoneCode[country] || "+___";
}