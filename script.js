document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     MOBILE NAVBAR TOGGLE
  ========================= */
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // optional: close menu after clicking any nav link
    const navItems = navLinks.querySelectorAll("a");
    navItems.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  /* =========================
     FILE DOWNLOAD COUNTER
  ========================= */
  let counter = 0;
  const counterElement = document.getElementById("downloadCounter");

  if (counterElement) {
    const intervalTime = 120; // milliseconds

    setInterval(() => {
      counter += Math.floor(Math.random() * 3) + 1;
      counterElement.innerText = counter.toLocaleString() + "+";
    }, intervalTime);
  }

  /* =========================
     OUR SERVICES FILTER
  ========================= */
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".service-card");

  if (buttons.length > 0 && cards.length > 0) {
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
  }

});