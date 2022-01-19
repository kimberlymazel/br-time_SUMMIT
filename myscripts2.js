const sideProfile = document.querySelector(".profile-container");
const profToggle = document.querySelector(".profile");
const closeBtn = document.querySelector(".close");

profToggle.addEventListener("click",() => {
    sideProfile.classList.add("active")
});

closeBtn.addEventListener("click",() => {
    sideProfile.classList.remove("active");
});