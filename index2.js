function getDOB() {
    // Get the values from the input fields
    const dobInput = document.getElementById('inputDob').value;
    const currentDateInput = document.getElementById('cdate').value;

    // Validate if both dates are provided
    if (!dobInput || !currentDateInput) {
        alert('Please enter both Date of Birth and Current Date.');
        return;
    }

    // Convert input values to Date objects
    const dob = new Date(dobInput);
    const currentDate = new Date(currentDateInput);

    // Calculate age
    let age = currentDate.getFullYear() - dob.getFullYear();
    const monthDifference = currentDate.getMonth() - dob.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < dob.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById('currentAge').textContent = `Umur anda adalah ${age} tahun.`;
}
const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-mobile");
const nav = document.getElementById("nav-mobile");
const navLink = document.querySelectorAll(".nav-link");

menu.addEventListener("click", () => {
  nav.classList.add("show");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("show");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});