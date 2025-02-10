let lastScroll = 0;
const topContainer = document.querySelector(".top-container");
const actoinContainer = document.querySelector(".action");
const profilePicture = document.querySelector(".profile");
const sidebarRight = document.querySelector(".sidebar-container .right");
const sidebarContainer = document.querySelector(".sidebar-container");
const settingSupport = document.querySelector(".setting-support");
const dropdownItem = document.querySelector(".sidebar-bottom-dropdown-item");

let showSidebar = false;

window.addEventListener("scroll", () => {
    if (!showSidebar) {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll) {
            topContainer.classList.add("hide-up");
            actoinContainer.classList.add("hide-down");
        } else {
            topContainer.classList.remove("hide-up");
            actoinContainer.classList.remove("hide-down");
        }

        lastScroll = currentScroll;
    }
});

profilePicture.addEventListener("click", () => {
    showSidebar = !showSidebar;
    if (showSidebar) {
        document.body.style.overflow = "hidden";
        sidebarContainer.classList.add("show-sidebar");

        // Tunggu sidebar selesai transisi baru tampilkan overlay
        setTimeout(() => {
            sidebarRight.style.opacity = "1";
        }, 200); // 300ms sesuai dengan durasi transisi sidebar
    } else {
        document.body.style.overflow = "";
        sidebarRight.style.opacity = "0";
        sidebarContainer.classList.remove("show-sidebar");
    }
});

sidebarRight.addEventListener("click", () => {
    showSidebar = false;
    document.body.style.overflow = "";
    sidebarRight.style.opacity = "0"; // Langsung sembunyikan overlay

    // Tunggu sedikit sebelum menghilangkan sidebar dengan animasi
    setTimeout(() => {
        sidebarContainer.classList.remove("show-sidebar");
    }, 50);
});

settingSupport.addEventListener("click", () => {
    settingSupport.classList.toggle("active");
    dropdownItem.classList.toggle("show");
});
