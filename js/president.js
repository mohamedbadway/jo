// اختيار الزر
const moreBtn = document.querySelector('.more-info');
const infoDiv = moreBtn.parentElement;

// إضافة تفاعل حي: عرض/إخفاء فقرة إضافية عند الضغط
moreBtn.addEventListener('click', () => {
  // التحقق إذا كانت الفقرة موجودة بالفعل
  let extraInfo = infoDiv.querySelector('.extra-info');

  if (!extraInfo) {
    // إنشاء فقرة جديدة
    extraInfo = document.createElement('p');
    extraInfo.classList.add('extra-info');
    extraInfo.textContent = "د. أحمد عزب عمل في عدة جامعات دولية، ولديه خبرة واسعة في الإدارة الأكاديمية والبحث العلمي، ويهدف لتطوير برامج الجامعة ورفع مستوى التعليم والبحث.";
    extraInfo.style.opacity = '0';
    extraInfo.style.transition = 'opacity 0.5s';

    infoDiv.appendChild(extraInfo);

    // تأثير ظهور تدريجي
    setTimeout(() => {
      extraInfo.style.opacity = '1';
    }, 50);

    // تغيير نص الزر
    moreBtn.textContent = "إخفاء المعلومات";
  } else {
    // إذا موجود، نعمل toggle
    if (extraInfo.style.display === 'none' || extraInfo.style.opacity === '0') {
      extraInfo.style.display = 'block';
      setTimeout(() => {
        extraInfo.style.opacity = '1';
      }, 50);
      moreBtn.textContent = "إخفاء المعلومات";
    } else {
      extraInfo.style.opacity = '0';
      setTimeout(() => {
        extraInfo.style.display = 'none';
      }, 500);
      moreBtn.textContent = "اقرأ المزيد";
    }
  }
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


