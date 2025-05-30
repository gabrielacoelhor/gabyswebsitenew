//header transparente
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.classList.add("transparent");
    } else {
      header.classList.remove("transparent");
    }
  });

//mudar pra p&b
const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});