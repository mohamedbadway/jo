// تفاعل زر "اقرأ المزيد" للأخبار
const newsButtons = document.querySelectorAll('.read-btn');

newsButtons.forEach(button => {
  button.addEventListener('click', () => {
    const newsTitle = button.parentElement.querySelector('h3').textContent;
    
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>${newsTitle}</h2>
        <p>تفاصيل أكثر عن "${newsTitle}" ستُعرض قريباً. تابعنا للمزيد من الأخبار والفعاليات.</p>
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