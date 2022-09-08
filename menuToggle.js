function toggleMenu() {
    
    let primaryNav = document.getElementById("primaryNav");
    primaryNav.classList.toggle("open");
}
let btn = document.getElementById('hamburgerBtn');
btn.onclick = toggleMenu; 