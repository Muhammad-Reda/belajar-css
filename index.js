const hamburgerBtn = document.querySelector("button.ham-menu");
const navContainer = document.querySelector(".nav-container-mobile");
const closeNavBtn = document.querySelector(".nav-items-container>button");

function hamState(state) {
    if (state) {
        hamburgerBtn.style.display = "none";
        navContainer.style.display = "block";
    } else {
        hamburgerBtn.style.display = "block";
        navContainer.style.display = "none";
    }
}

hamburgerBtn.addEventListener("click", () => {
    hamState(true);
});

closeNavBtn.addEventListener("click", () => {
    hamState(false);
});
