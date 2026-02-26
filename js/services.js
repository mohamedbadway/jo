// تفاعل زر "اقرأ المزيد" للخدمات
const buttons = document.querySelectorAll('.learn-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const title = button.parentElement.querySelector('h3').textContent;
    
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>${title}</h2>
        <p>سيتم إضافة تفاصيل أكثر عن خدمة ${title} قريباً!</p>
      </div>
    `;
    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => modal.remove());
    modal.addEventListener('click', e => {
      if(e.target === modal) modal.remove();
    });
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