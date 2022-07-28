const menuBtn = document.querySelector("[data-menu-button]");
const menuBox = document.querySelector("[data-menu-box]");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("is-open");
  menuBox.classList.toggle("is-open");
  document.body.classList.toggle("menu-open");
});
