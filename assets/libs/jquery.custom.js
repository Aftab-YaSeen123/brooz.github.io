// fancy box
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

// barger manu

const menuBtn = document.getElementById("menu-btn");
const burger = document.querySelector(".menu-btn__burger");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
});
