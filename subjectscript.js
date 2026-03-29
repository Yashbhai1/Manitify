// ================= MOBILE MENU =================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ================= THEME TOGGLE =================
function toggleMode() {
  document.body.classList.toggle("light-mode");

  const icon = document.getElementById("themeIcon");

  if (document.body.classList.contains("light-mode")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
}

// ================= SUBJECT NAME FROM URL =================
// Example: subject.html?subj=maths1
const params = new URLSearchParams(window.location.search);
const subject = params.get("subj");

const subjectTitle = document.getElementById("subjectTitle");

const subjectNames = {
  maths1: "Mathematics 1",
  maths2: "Mathematics 2",
  chemistry: "Engineering Chemistry",
  biology: "Biology for Engineers",
  beee: "Basic Electrical and Electronics Engg",
  environment: "Environmental Sciences",
  manufacturing: "Manufacturing Sciences",
  physics: "Physics",
  graphics: "Engineering Graphics",
  pps: "programming for problem solving",
  communication: "Communication Skills"
};

if (subject && subjectNames[subject]) {
  subjectTitle.textContent = subjectNames[subject];
}

// ================= PDF DATA =================
const pdfData = {
  assignments: [
    {
      title: "Continuity & Differentiability (Sec G)",
      desc: "Partial Differentiation assignment of section G.",
      view: "pdfs/sample.pdf",
      download: "pdfs/sample.pdf"
    },
    {
      title: "Vector Calculus Assignment",
      desc: "Important assignment for vector calculus unit.",
      view: "pdfs/sample.pdf",
      download: "pdfs/sample.pdf"
    }
  ],

  notes: [
    {
      title: "Unit 1 Class Notes",
      desc: "Complete handwritten notes for Unit 1.",
      view: "pdfs/sample.pdf",
      download: "pdfs/sample.pdf"
    },
    {
      title: "Differentiation Notes",
      desc: "Useful notes for revision and exam prep.",
      view: "pdfs/sample.pdf",
      download: "pdfs/sample.pdf"
    }
  ],

  books: [
    {
      title: "Engineering Mathematics Book",
      desc: "Recommended textbook PDF for complete syllabus.",
      view: "pdfs/sample.pdf",
      download: "pdfs/sample.pdf"
    },
    {
      title: "Reference Problem Book",
      desc: "Practice problems and solutions.",
      view: "pdfs/sample.pdf",
      download: "pdfs/sample.pdf"
    }
  ],

  pyqs: [
    {
      title: "Maths 1 PYQ 2023",
      desc: "Previous year question paper of 2023.",
      view: "pdfs/sample.pdf",
      download: "pdfs/sample.pdf"
    },
    {
      title: "Maths 1 PYQ 2022",
      desc: "Previous year question paper of 2022.",
      view: "pdfs/sample.pdf",
      download: "pdfs/sample.pdf"
    }
  ]
};

// ================= FILTER CATEGORY CARDS =================
const filterSelect = document.getElementById("resourceFilter");
const cards = document.querySelectorAll(".resource-card");

filterSelect.addEventListener("change", () => {
  const selected = filterSelect.value;

  cards.forEach(card => {
    const type = card.getAttribute("data-type");

    if (selected === "all" || selected === type) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});

// ================= MODAL =================
const modal = document.getElementById("pdfModal");
const modalTitle = document.getElementById("modalTitle");
const pdfList = document.getElementById("pdfList");

function openModal(type) {
  modal.classList.add("active");
  modalTitle.textContent = type.charAt(0).toUpperCase() + type.slice(1);

  const items = pdfData[type];
  pdfList.innerHTML = "";

  items.forEach(item => {
    pdfList.innerHTML += `
      <div class="pdf-card">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <div class="pdf-actions">
          <a href="${item.view}" target="_blank" class="view-btn">View PDF</a>
          <a href="${item.download}" download class="download-btn">Download</a>
        </div>
      </div>
    `;
  });
}

function closeModal() {
  modal.classList.remove("active");
}

// Close modal on outside click
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});