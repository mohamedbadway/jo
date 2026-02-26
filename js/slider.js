// // ===============================
// // Featured Cards Carousel
// // ===============================
// const slider = document.querySelector(".cards-slider");
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener("mousedown", (e) => {
//   isDown = true;
//   slider.classList.add("active");
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener("mouseleave", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });

// slider.addEventListener("mouseup", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });

// slider.addEventListener("mousemove", (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 2; // سرعة السحب
//   slider.scrollLeft = scrollLeft - walk;
// });

// // Arrow buttons functionality
// const prevBtn = document.getElementById("slide-prev");
// const nextBtn = document.getElementById("slide-next");

// prevBtn.addEventListener("click", () => {
//   slider.scrollBy({ left: -300, behavior: "smooth" });
// });

// nextBtn.addEventListener("click", () => {
//   slider.scrollBy({ left: 300, behavior: "smooth" });
// });