// ===============================
// Hero Slider
// ===============================
const slides = document.querySelectorAll(".hero .slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// Auto slide every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);


// ===============================
// Counters Animation
// ===============================
const counters = [
  { id: "students-count", target: 1500 },
  { id: "teachers-count", target: 120 },
  { id: "courses-count", target: 45 },
  { id: "awards-count", target: 25 },
];

counters.forEach(counter => {
  const el = document.getElementById(counter.id);
  let count = 0;
  const increment = Math.ceil(counter.target / 100); // smooth increment
  const interval = setInterval(() => {
    count += increment;
    if (count >= counter.target) {
      count = counter.target;
      clearInterval(interval);
    }
    el.textContent = count;
  }, 20);
});


// ===============================
// Featured Cards Slider
// ===============================
const cardsSlider = document.querySelector(".cards-slider");
const slidePrevBtn = document.getElementById("slide-prev");
const slideNextBtn = document.getElementById("slide-next");

slidePrevBtn.addEventListener("click", () => {
  cardsSlider.scrollBy({ left: -300, behavior: "smooth" });
});

slideNextBtn.addEventListener("click", () => {
  cardsSlider.scrollBy({ left: 300, behavior: "smooth" });
});


// ===============================
// Scroll Animations (fade in)
// ===============================
const scrollElements = document.querySelectorAll(".about, .vision-mission, .faculties, .featured-cards, .gallery");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
};

const displayScrollElement = (el) => {
  el.classList.add("in-view");
};

const hideScrollElement = (el) => {
  el.classList.remove("in-view");
};

const handleScrollAnimation = () => {
  scrollElements.forEach(el => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", handleScrollAnimation);
handleScrollAnimation();


// ===============================
// Smooth Scroll for Anchor Links
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
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
// == تخزين كل النصوص بالعربي والإنجليزي ==
const translations = [
  // Top Bar
  { selector: ".top-bar div", ar: "📞 0123456789 | ✉ info@sadat.edu.eg", en: "📞 0123456789 | ✉ info@sadat.edu.eg" },
  { selector: "#langBtn", ar: "EN", en: "AR" },

  // Logo
  { selector: ".logo span", ar: "جامعة مدينة السادات", en: "Sadat City University" },

  // Navbar
  { selector: 'nav .main-menu > li:nth-child(1) > a', ar: "عن الجامعة", en: "About Us" },
  { selector: 'nav .main-menu > li:nth-child(1) .dropdown li:nth-child(1) a', ar: "الرؤية", en: "Vision" },
  { selector: 'nav .main-menu > li:nth-child(1) .dropdown li:nth-child(2) a', ar: "الرئيس", en: "President" },
  { selector: 'nav .main-menu > li:nth-child(1) .dropdown li:nth-child(3) a', ar: "تاريخ الجامعة", en: "History" },

  { selector: 'nav .main-menu > li:nth-child(2) > a', ar: "الكليات", en: "Faculties" },
  { selector: 'nav .main-menu > li:nth-child(2) .dropdown li:nth-child(1) a', ar: "التجارة", en: "Commerce" },
  { selector: 'nav .main-menu > li:nth-child(2) .dropdown li:nth-child(2) a', ar: "الحاسبات", en: "Computers" },
  { selector: 'nav .main-menu > li:nth-child(2) .dropdown li:nth-child(3) a', ar: "السياحة و الفنادق", en: "Tourism & Hotels" },
  { selector: 'nav .main-menu > li:nth-child(2) .dropdown li:nth-child(4) a', ar: "كلية التربية", en: "Faculty of Education" },
  { selector: 'nav .main-menu > li:nth-child(2) .dropdown li:nth-child(5) a', ar: "كلية الصيدلة", en: "Faculty of Pharmacy" },
  { selector: 'nav .main-menu > li:nth-child(2) .dropdown li:nth-child(6) a', ar: "كلية الطب البيطري", en: "Faculty of Veterinary Medicine" },

  { selector: 'nav .main-menu > li:nth-child(3) > a', ar: "الخدمات الطلابية", en: "Student Services" },
  { selector: 'nav .main-menu > li:nth-child(3) .dropdown li:nth-child(1) a', ar: "المكتبة الإلكترونية", en: "E-Library" },
  { selector: 'nav .main-menu > li:nth-child(3) .dropdown li:nth-child(2) a', ar: "الدورات التدريبية", en: "Training Courses" },

  { selector: 'nav .main-menu > li:nth-child(4) a', ar: "الأخبار", en: "News" },
  { selector: 'nav .main-menu > li:nth-child(5) a', ar: "تواصل معنا", en: "Contact Us" },

  // Hero Slider
  { selector: ".hero .slide:nth-child(1) h1", ar: "مستقبلك يبدأ هنا", en: "Your Future Starts Here" },
  { selector: ".hero .slide:nth-child(1) p", ar: "تعليم حديث وبيئة تعليمية متطورة لكل الطلاب", en: "Modern education & advanced learning environment for all students" },
  { selector: ".hero .slide:nth-child(1) a", ar: "تعرف على الجامعة", en: "Learn About University" },

  { selector: ".hero .slide:nth-child(2) h1", ar: "برامج أكاديمية متميزة", en: "Outstanding Academic Programs" },
  { selector: ".hero .slide:nth-child(2) p", ar: "كوادر تدريسية على أعلى مستوى لتعليم متكامل", en: "Top faculty for comprehensive learning" },
  { selector: ".hero .slide:nth-child(2) a", ar: "اكتشف الكليات", en: "Explore Faculties" },

  { selector: ".hero .slide:nth-child(3) h1", ar: "فعاليات مستمرة", en: "Ongoing Events" },
  { selector: ".hero .slide:nth-child(3) p", ar: "مؤتمرات وورش عمل للطلاب والخريجين", en: "Conferences & workshops for students & graduates" },
  { selector: ".hero .slide:nth-child(3) a", ar: "اعرف أكثر", en: "Learn More" },

  // About
  { selector: ".about h2", ar: "عن الجامعة", en: "About the University" },
  { selector: ".about p", ar: "جامعة مدينة السادات الأهلية تسعى للتميز الأكاديمي وإعداد خريجين قادرين على المنافسة في سوق العمل. تضم الجامعة كليات متعددة ومتنوعة تشمل الهندسة، الحاسبات والذكاء الاصطناعي، إدارة الأعمال، وغيرها.", en: "Sadat City University strives for academic excellence and prepares graduates to compete in the job market. The university includes multiple faculties such as Engineering, Computing & AI, Business Administration, and more." },
  { selector: ".about a", ar: "اقرأ المزيد", en: "Read More" },

  // Vision & Mission
  { selector: ".vision-mission h2", ar: "رؤيتنا ورسالتنا", en: "Our Vision & Mission" },
  { selector: ".vision-mission .box:nth-child(1) h3", ar: "رؤيتنا", en: "Our Vision" },
  { selector: ".vision-mission .box:nth-child(1) p", ar: "تحقيق التميز الأكاديمي محليًا ودوليًا من خلال بيئة تعليمية مبتكرة.", en: "Achieve academic excellence locally and globally through an innovative learning environment." },
  { selector: ".vision-mission .box:nth-child(2) h3", ar: "رسالتنا", en: "Our Mission" },
  { selector: ".vision-mission .box:nth-child(2) p", ar: "تخريج جيل قادر على المنافسة والإبداع في سوق العمل والبحث العلمي.", en: "Graduating a generation capable of competing and innovating in the labor market and research." },

  // Counters
  { selector: ".counters .counter-box:nth-child(1) p", ar: "طالب", en: "Students" },
  { selector: ".counters .counter-box:nth-child(2) p", ar: "أستاذ", en: "Teachers" },
  { selector: ".counters .counter-box:nth-child(3) p", ar: "برنامج أكاديمي", en: "Courses" },
  { selector: ".counters .counter-box:nth-child(4) p", ar: "جوائز", en: "Awards" },

  // Faculties Section كامل
  { selector: ".faculties h2", ar: "الكليات", en: "Faculties" },

  { selector: ".faculties .card:nth-child(1) h3", ar: "كلية التربية", en: "Faculty of Education" },
  { selector: ".faculties .card:nth-child(1) p", ar: "تعلم أساليب التعليم الحديثة وإعداد المعلمين وتأهيلهم تربويًا وعلميًا لبناء أجيال ناجحة ومتميزة.", en: "Learn modern teaching methods and train teachers for successful generations." },
  { selector: ".faculties .card:nth-child(1) a", ar: "تفاصيل", en: " Details" },

  { selector: ".faculties .card:nth-child(2) h3", ar: "الحاسبات والذكاء الاصطناعي", en: "Computers & AI" },
  { selector: ".faculties .card:nth-child(2) p", ar: "تعلم علوم الحاسوب والذكاء الاصطناعي بشكل متقدم.", en: "Learn advanced computer science and AI." },
  { selector: ".faculties .card:nth-child(2) a", ar: "تفاصيل", en: " Details" },

  { selector: ".faculties .card:nth-child(3) h3", ar: "كلية السياحة والفنادق", en: "Faculty of Tourism & Hotels" },
  { selector: ".faculties .card:nth-child(3) p", ar: "دراسة إدارة السياحة والفنادق وتنظيم الرحلات والضيافة باحترافية عالية وفق أحدث المعايير العالمية.", en: "Study tourism & hotel management professionally following global standards." },
  { selector: ".faculties .card:nth-child(3) a", ar: "تفاصيل", en: " Details" },

  { selector: ".faculties .card:nth-child(4) h3", ar: "كلية التربية الرياضية", en: "Faculty of Physical Education" },
  { selector: ".faculties .card:nth-child(4) p", ar: "تعلم علوم الرياضة والتدريب البدني وإعداد مدربين متخصصين في اللياقة والصحة البدنية.", en: "Learn sports science and physical training, preparing specialized fitness coaches." },
  { selector: ".faculties .card:nth-child(4) a", ar: "تفاصيل", en: " Details" },

  { selector: ".faculties .card:nth-child(5) h3", ar: "كلية الصيدلة", en: "Faculty of Pharmacy" },
  { selector: ".faculties .card:nth-child(5) p", ar: "دراسة علوم الأدوية وتصنيعها وتحليلها لضمان تقديم رعاية صحية آمنة وفعالة للمجتمع.", en: "Study pharmaceutical sciences, manufacturing, and analysis to ensure safe and effective healthcare." },
  { selector: ".faculties .card:nth-child(5) a", ar: "تفاصيل", en: " Details" },

  { selector: ".faculties .card:nth-child(6) h3", ar: "كلية التجارة", en: "Faculty of Commerce" },
  { selector: ".faculties .card:nth-child(6) p", ar: "دراسة العلوم المالية والمحاسبية والإدارية وإعداد كوادر مؤهلة لإدارة الأعمال والاستثمار وفق أحدث النظم الاقتصادية.", en: "Study finance, accounting, and management, preparing qualified professionals for business and investment." },
  { selector: ".faculties .card:nth-child(6) a", ar: "تفاصيل", en: " Details" },

  { selector: ".faculties .card:nth-child(7) h3", ar: "كلية الطب البيطري", en: "Faculty of Veterinary Medicine" },
  { selector: ".faculties .card:nth-child(7) p", ar: "دراسة صحة الحيوان وتشخيص وعلاج الأمراض البيطرية لحماية الثروة الحيوانية وسلامة الغذاء.", en: "Study animal health, diagnosis, and treatment of veterinary diseases to protect livestock and food safety." },
  { selector: ".faculties .card:nth-child(7) a", ar: "تفاصيل", en: " Details" },

  { selector: ".faculties .card:nth-child(8) h3", ar: "كلية الحقوق", en: "Faculty of Law" },
  { selector: ".faculties .card:nth-child(8) p", ar: "دراسة القوانين والتشريعات المختلفة وإعداد كوادر قانونية قادرة على تحقيق العدالة والدفاع عن الحقوق بكفاءة ومهنية عالية.", en: "Study laws and legislation, preparing legal professionals capable of achieving justice and defending rights efficiently." },
  { selector: ".faculties .card:nth-child(8) a", ar: "تفاصيل", en: " Details" },

  // Featured Events Slider كامل
  { selector: ".featured-cards h2", ar: "أحدث الفعاليات والبرامج", en: "Latest Events & Programs" },

  { selector: ".featured-cards .cards-slider .card:nth-child(1) h3", ar: "مؤتمر الصيدلة", en: "Pharmacy Conference" },
  { selector: ".featured-cards .cards-slider .card:nth-child(1) p", ar: "شارك في فعاليات الصيدلة وورش العمل العلمية للتعرف على أحدث الأبحاث والتقنيات الدوائية.", en: "Participate in pharmacy events and workshops to learn about the latest research and pharmaceutical technologies." },
  { selector: ".featured-cards .cards-slider .card:nth-child(1) a", ar: "سجل الآن", en: "Register Now" },

  { selector: ".featured-cards .cards-slider .card:nth-child(2) h3", ar: "مؤتمر الذكاء الاصطناعي", en: "AI Conference" },
  { selector: ".featured-cards .cards-slider .card:nth-child(2) p", ar: "شارك في فعاليات الذكاء الاصطناعي وورش العمل.", en: "Join AI events and workshops." },
  { selector: ".featured-cards .cards-slider .card:nth-child(2) a", ar: "سجل الآن", en: "Register Now" },

  { selector: ".featured-cards .cards-slider .card:nth-child(3) h3", ar: "مؤتمر السياحة والفنادق", en: "Tourism & Hotels Conference" },
  { selector: ".featured-cards .cards-slider .card:nth-child(3) p", ar: "شارك في فعاليات السياحة والفنادق وورش العمل المتخصصة لاكتساب خبرات عملية في مجال الضيافة وإدارة المنشآت السياحية.", en: "Participate in tourism & hotel events and workshops to gain practical experience in hospitality management." },
  { selector: ".featured-cards .cards-slider .card:nth-child(3) a", ar: "سجل الآن", en: "Register Now" },

  { selector: ".featured-cards .cards-slider .card:nth-child(4) h3", ar: "يوم الطلاب المفتوح", en: "Open Student Day" },
  { selector: ".featured-cards .cards-slider .card:nth-child(4) p", ar: "تعرف على كليات الجامعة وخدماتها المتنوعة.", en: "Explore the university faculties and various student services." },
  { selector: ".featured-cards .cards-slider .card:nth-child(4) a", ar: "سجل الآن", en: "Register Now" },

  // Gallery Section
  { selector: ".gallery h2", ar: "معرض الصور", en: "Photo Gallery" },

  // Footer كامل
  { selector: "footer .footer-grid div:nth-child(1) h3", ar: "روابط سريعة", en: "Quick Links" },
  { selector: "footer .footer-grid div:nth-child(1) p:nth-child(2) a", ar: "التقديم", en: "Admission" },
  { selector: "footer .footer-grid div:nth-child(1) p:nth-child(3) a", ar: "الخدمات الطلابية", en: "Student Services" },
  { selector: "footer .footer-grid div:nth-child(1) p:nth-child(4) a", ar: "الدورات التدريبية", en: "Training Courses" },

  { selector: "footer .footer-grid div:nth-child(2) h3", ar: "تواصل معنا", en: "Contact Us" },
  { selector: "footer .footer-grid div:nth-child(2) p:nth-child(2)", ar: "0123456789", en: "0123456789" },
  { selector: "footer .footer-grid div:nth-child(2) p:nth-child(3)", ar: "info@sadat.edu.eg", en: "info@sadat.edu.eg" },
  { selector: "footer .footer-grid div:nth-child(2) p:nth-child(4)", ar: "مدينة السادات، مصر", en: "Sadat City, Egypt" },

  { selector: "footer .footer-grid div:nth-child(3) h3", ar: "تابعنا", en: "Follow Us" },
  { selector: "footer .footer-grid div:nth-child(3) p:nth-child(2) a", ar: "فيسبوك", en: "Facebook" },
  { selector: "footer .footer-grid div:nth-child(3) p:nth-child(3) a", ar: "تويتر", en: "Twitter" },
  { selector: "footer .footer-grid div:nth-child(3) p:nth-child(4) a", ar: "لينكد إن", en: "LinkedIn" },

  { selector: "footer .copy", ar: "© 2026 جامعة مدينة السادات", en: "© 2026 Sadat City University" }
];

// الحالة الحالية للغة
let currentLang = "ar";

// زر تغيير اللغة
const langBtn = document.getElementById("langBtn");
langBtn.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  translations.forEach(item => {
    const el = document.querySelector(item.selector);
    if (el) el.innerHTML = currentLang === "ar" ? item.ar : item.en;
  });
});