const menuButton = document.querySelector("#menu-button");
const navLinks = document.querySelector("#nav-links");
const menuIcon = menuButton.querySelector("i");

function closeMenu() {
    navLinks.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
}

menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuIcon.classList.toggle("fa-bars", !isOpen);
    menuIcon.classList.toggle("fa-xmark", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
    const clickedOutsideMenu =
        !navLinks.contains(event.target) && !menuButton.contains(event.target);

    if (clickedOutsideMenu) {
        closeMenu();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        closeMenu();
    }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();