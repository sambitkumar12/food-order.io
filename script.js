function toggleMenu() {
    document.getElementById("navbar").classList.toggle("active");
}

window.onscroll = () => {
    document.getElementById("navbar").classList.remove("active");
};
