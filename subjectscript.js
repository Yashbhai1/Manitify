// ================= MOBILE MENU =================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ================= THEME TOGGLE =================
function toggleMode() {
  document.body.classList.toggle("light-mode");

  const icon = document.getElementById("themeIcon");

  if (icon) {
    if (document.body.classList.contains("light-mode")) {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    } else {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }
  }
}

// ================= SUBJECT NAME FROM URL =================
// Example: subject.html?subj=maths1
const params = new URLSearchParams(window.location.search);
const subject = params.get("subj") || "maths1";

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
  pps: "Programming for Problem Solving",
  communication: "Communication Skills"
};

if (subjectTitle && subjectNames[subject]) {
  subjectTitle.textContent = subjectNames[subject];
}

// ================= SUBJECT-WISE PDF DATA =================
const pdfData = {
  maths1: {
    assignments: [
      {
        title: "Continuity & Differentiability Assignment",
        desc: "Assignment on continuity and differentiability.",
        view: "subject data/maths1/assignments/continuity_assignment.pdf",
        download: "subject data/maths1/assignments/continuity_assignment.pdf"
      },
      {
        title: "Vector Calculus Assignment",
        desc: "Important vector calculus assignment.",
        view: "subject data/maths1/assignments/vector_calculus.pdf",
        download: "subject data/maths1/assignments/vector_calculus.pdf"
      }
    ],
    notes: [
      {
        title: "Vector Notes",
        desc: "Class notes for Vector .",
        view: "Maths1/vector.pdf",
        download: "Maths1/vector.pdf"
      },
      {
        title: "Integral Notes",
        desc: "Revision notes for Integral.",
        view: "Maths1/integrals.pdf",
        download: "Maths1/integrals.pdf"
      },
      {
        title: "Partial Differentiation Notes",
        desc: "Class Notes For Partial Differentiation",
        view: "Maths1/partial_diff.pdf",
        download: "Maths1/partial_diff.pdf" 
      }
    ],
    books: [
      {
        title: "HK Das Engi.Mathe. Book",
        desc: "Recommended textbook for Maths 1 for CGPA 9.3 + .",
        view: "Maths1/Hk_Das.pdf",
        download: "Maths1/Hk_Das.pdf"
      },
       {
        title: "RK Jain and Iyenger Engi.Mathe. Book",
        desc: "Recommended textbook for Maths 1 for CGPA 9.5 + .",
        view: "Maths1/RK_Jain_and_Iyenger.pdf",
        download: "Maths1/RK_Jain_and_Iyenger.pdf"
      },
      {
        title: "BV Ramana Engi.Mathe. Book",
        desc: "Recommended textbook for Maths 1 for CGPA 9.4 + .",
        view: "Maths1/BV_Ramana.pdf",
        download: "Maths1/BV_Ramana.pdf"
      }
    ],
    pyqs: [
      {
        title: "Maths 1 Mini Pyq's",
        desc: "All Previous year question paper Of Mini Exam.",
        view: "Maths1/mini_2020-21.pdf",
        download: "Maths1/mini_2020-21.pdf"
      },
      {
        title: "Maths 1 Mid Exam Pyq's",
        desc: "All Previous year question paper Of Mid Exam. ",
        view: "Maths1/mid 2022,2024.pdf",
        download: "Maths1/mid 2022,2024.pdf"
      },
      {
        title: "Maths 1 End Exam Pyq's",
        desc: "All Previous year question paper Of End Exam. ",
        view: "Maths1/end_term_2022.pdf",
        download: "Maths1/end_term_2022.pdf"
      }
    ]
  },

  chemistry: {
    assignments: [
      {
        title: "Atomic Structure Assignment",
        desc: "Assignment based on atomic structure.",
        view: "subject data/chemistry/assignments/atomic_structure.pdf",
        download: "subject data/chemistry/assignments/atomic_structure.pdf"
      }
    ],
    notes: [
      {
        title: "Chemical Bonding Notes",
        desc: "Short notes on chemical bonding.",
        view: "subject data/chemistry/notes/chemical_bonding.pdf",
        download: "subject data/chemistry/notes/chemical_bonding.pdf"
      }
    ],
    books: [
      {
        title: "Engineering Chemistry Book",
        desc: "Main textbook for chemistry.",
        view: "subject data/chemistry/books/engineering_chemistry.pdf",
        download: "subject data/chemistry/books/engineering_chemistry.pdf"
      }
    ],
    pyqs: [
      {
        title: "Chemistry PYQ 2023",
        desc: "Previous year paper 2023.",
        view: "subject data/chemistry/pyqs/chemistry_2023.pdf",
        download: "subject data/chemistry/pyqs/chemistry_2023.pdf"
      }
    ]
  },

  biology: {
    assignments: [
      {
        title: "Cell Biology Assignment",
        desc: "Assignment on cell structure and functions.",
        view: "subject data/biology/assignments/cell_biology.pdf",
        download: "subject data/biology/assignments/cell_biology.pdf"
      }
    ],
    notes: [
      {
        title: "Biomolecules Notes",
        desc: "Important notes for biomolecules.",
        view: "subject data/biology/notes/biomolecules.pdf",
        download: "subject data/biology/notes/biomolecules.pdf"
      }
    ],
    books: [
      {
        title: "Biology for Engineers Book",
        desc: "Main reference textbook.",
        view: "subject data/biology/books/biology_for_engineers.pdf",
        download: "subject data/biology/books/biology_for_engineers.pdf"
      }
    ],
    pyqs: [
      {
        title: "Biology PYQ 2022",
        desc: "Previous year question paper.",
        view: "subject data/biology/pyqs/biology_2022.pdf",
        download: "subject data/biology/pyqs/biology_2022.pdf"
      }
    ]
  },

  beee: {
    assignments: [],
    notes: [],
    books: [],
    pyqs: []
  },

  environment: {
    assignments: [],
    notes: [],
    books: [],
    pyqs: []
  },

  manufacturing: {
    assignments: [],
    notes: [],
    books: [],
    pyqs: []
  },

  maths2: {
    assignments: [],
    notes: [],
    books: [],
    pyqs: []
  },

  physics: {
    assignments: [],
    notes: [],
    books: [],
    pyqs: []
  },

  graphics: {
    assignments: [],
    notes: [],
    books: [],
    pyqs: []
  },

  pps: {
    assignments: [],
    notes: [],
    books: [],
    pyqs: []
  },

  communication: {
    assignments: [],
    notes: [],
    books: [],
    pyqs: []
  }
};

// ================= FILTER CATEGORY CARDS =================
const filterSelect = document.getElementById("resourceFilter");
const cards = document.querySelectorAll(".resource-card");

if (filterSelect) {
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
}

// ================= MODAL =================
const modal = document.getElementById("pdfModal");
const modalTitle = document.getElementById("modalTitle");
const pdfList = document.getElementById("pdfList");

function openModal(type) {
  if (!modal || !modalTitle || !pdfList) return;

  modal.classList.add("active");

  const modalNames = {
    assignments: "Assignments",
    notes: "Notes",
    books: "Books",
    pyqs: "PYQs"
  };

  modalTitle.textContent = `${subjectNames[subject] || "Subject"} - ${modalNames[type] || type}`;

  const items = pdfData[subject]?.[type] || [];
  pdfList.innerHTML = "";

  if (items.length === 0) {
    pdfList.innerHTML = `
      <div class="pdf-card">
        <h3>No PDFs Available</h3>
        <p>Resources for this section will be uploaded soon.</p>
      </div>
    `;
    return;
  }

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
  if (modal) {
    modal.classList.remove("active");
  }
}

// Close modal on outside click
if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}