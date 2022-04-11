const sections = document.querySelectorAll(".section");
const sectionBtns = document.querySelectorAll(".controls");
const sectionBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const themeBtn = document.querySelector(".btn-theme");

// function transitionPages() {
//   for (let i = 0; i < sectionBtn.length; i++) {
//     sectionBtn[i].addEventListener("click", function () {
//       let currentBtn = document.querySelectorAll(".active-btn");
//       currentBtn[0].className = currentBtn[0].className.replace(
//         "active-btn",
//         ""
//       );
//       this.className += " active-btn";
//     });
//   }

//   // Active section
//   allSections.addEventListener("click", (e) => {
//     const id = e.target.dataset.id;
//     if (id) {
//       sectionBtns.forEach((btn) => {
//         btn.classList.remove("active");
//       });
//       e.target.classList.add("active");

//       // hide other sections
//       sections.forEach((section) => {
//         section.classList.remove("active");
//       });

//       const element = document.getElementById(id);
//       element.classList.add("active");
//     }
//   });
// }

// transitionPages();

// iife

(function () {
  sectionBtn.forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();
