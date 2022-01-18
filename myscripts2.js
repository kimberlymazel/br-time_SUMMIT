const sideProfile = document.querySelector(".profile-container");
const profToggle = document.querySelector(".profile");
const closeBtn = document.querySelector(".close");

// profToggle.addEventListener("click",() => {
//     const visibility = sideProfile.getAttribute("data-visible");

//     console.log(visibility);
// })

profToggle.addEventListener("click",() => {
    sideProfile.classList.add("active")
});

closeBtn.addEventListener("click",() => {
    sideProfile.classList.remove("active");
});