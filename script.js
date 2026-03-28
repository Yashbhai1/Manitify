const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

//  files downloaded counter //
let counter = 0;
const counterElement = document.getElementById("downloadCounter");

// speed control (higher = slower)
const intervalTime = 120; // milliseconds

setInterval(() => {
  counter += Math.floor(Math.random() * 3) + 1; // random 1–3 increase
  counterElement.innerText = counter.toLocaleString() + "+";
}, intervalTime);

// OUR SERVICES SECTION //
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".service-card");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    cards.forEach(card => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});