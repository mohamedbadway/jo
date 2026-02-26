// تفاعل إرسال النموذج
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = contactForm.name.value;
  const email = contactForm.email.value;
  const message = contactForm.message.value;

  // إنشاء مودال تفاعلي
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>شكراً لتواصلك معنا!</h2>
      <p>تم استلام رسالتك بنجاح.</p>
      <p><strong>الاسم:</strong> ${name}</p>
      <p><strong>البريد الإلكتروني:</strong> ${email}</p>
      <p><strong>الرسالة:</strong> ${message}</p>
    </div>
  `;
  document.body.appendChild(modal);

  // إغلاق المودال
  modal.querySelector('.close').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', e => {
    if(e.target === modal) modal.remove();
  });

  // مسح النموذج
  contactForm.reset();
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