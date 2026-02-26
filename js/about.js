const buttons = document.querySelectorAll('.learn-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const extraInfo = button.parentElement.querySelector('.extra-info');
    extraInfo.classList.toggle('show');

    if(extraInfo.classList.contains('show')){
      button.textContent = "اقرأ أقل";
    } else {
      button.textContent = "اقرأ المزيد";
    }
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
