// اختيار العناصر
const moreBtn = document.querySelector('.more-btn');
const visionPage = document.querySelector('.vision-page');

// إنشاء عنصر جديد للمحتوى الإضافي
const extraContent = document.createElement('div');
extraContent.classList.add('extra-content');
extraContent.innerHTML = `
  <h2>تفاصيل الرؤية</h2>
  <p>
    تسعى الجامعة لتقديم تعليم مبتكر قائم على البحث العلمي والابتكار.
    دعم الطلاب بالأدوات الحديثة وتمكينهم من المنافسة محليًا ودوليًا.
  </p>
  <p>
    الرؤية تشمل تطوير البرامج الأكاديمية، تحفيز الكفاءات، وخلق بيئة تعليمية ممتعة ومحفزة.
  </p>
`;

// وضع التنسيق المبدئي على العنصر
extraContent.style.opacity = 0;
extraContent.style.transition = "opacity 0.6s ease, transform 0.6s ease";
extraContent.style.transform = "translateY(20px)";

// عند الضغط على الزر
moreBtn.addEventListener('click', () => {
  // إذا المحتوى موجود بالفعل، نعمل إزالة
  if (visionPage.contains(extraContent)) {
    extraContent.style.opacity = 0;
    extraContent.style.transform = "translateY(20px)";
    setTimeout(() => visionPage.removeChild(extraContent), 600);
    moreBtn.textContent = "اعرف أكثر عن رؤيتنا";
  } else {
    visionPage.appendChild(extraContent);
    setTimeout(() => {
      extraContent.style.opacity = 1;
      extraContent.style.transform = "translateY(0)";
    }, 50);
    moreBtn.textContent = "أخفِ التفاصيل";
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