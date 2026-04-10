document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const mobileMenuItems = document.getElementById('mobile-menu-items');
    hamburgerIcon.onclick = function () {
        mobileMenuItems.classList.toggle('active');
    };
});
