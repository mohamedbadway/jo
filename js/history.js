// نضيف تفاعل على أحداث الخط الزمني
const events = document.querySelectorAll('.event');

events.forEach(event => {
  event.addEventListener('mouseenter', () => {
    event.querySelector('p').style.backgroundColor = '#e0f0ff';
    event.querySelector('p').style.transform = 'scale(1.05)';
  });
  event.addEventListener('mouseleave', () => {
    event.querySelector('p').style.backgroundColor = 'white';
    event.querySelector('p').style.transform = 'scale(1)';
  });
});



document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.getElementById("menu-toggle");
  const mainMenu = document.getElementById("main-menu");

  if (menuToggle && mainMenu) {

    const menuIcon = menuToggle.querySelector("i");

    menuToggle.addEventListener("click", function () {
      mainMenu.classList.toggle("active");

      // تغيير الأيقونة
      if (menuIcon) {
        if (mainMenu.classList.contains("active")) {
          menuIcon.classList.remove("fa-bars");
          menuIcon.classList.add("fa-times");
        } else {
          menuIcon.classList.remove("fa-times");
          menuIcon.classList.add("fa-bars");
        }
      }
    });

  }

});