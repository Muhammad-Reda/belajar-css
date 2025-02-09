let lastScroll = 0;
const topContainer = document.querySelector(".top-container");
const actoinContainer = document.querySelector(".action");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
        // Scrolling down
        topContainer.classList.add("hide-up");
        actoinContainer.classList.add("hide-down");
    } else {
        // Scrolling up
        topContainer.classList.remove("hide-up");
        actoinContainer.classList.remove("hide-down");
    }

    lastScroll = currentScroll;
});
