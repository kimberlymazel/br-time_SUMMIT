const registerBtn = document.querySelector(".register-btn");
const sendBtn = document.querySelector(".send-btn");
const popupBox = document.querySelector(".popup-overlay");
const closeBtn = document.querySelector(".close")

registerBtn.addEventListener("click",() => {
    popupBox.classList.add("active");
});

sendBtn.addEventListener("click",() => {
    popupBox.classList.remove("active");
});

closeBtn.addEventListener("click",() => {
    popupBox.classList.remove("active");
});

window.onclick = function(event) {
    if (event.target == popupBox) {
        popupBox.classList.remove("active");
    }
}