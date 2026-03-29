// ==========================
// DARK / LIGHT MODE TOGGLE
// ==========================
function toggleMode() {
  document.body.classList.toggle("light-mode");

  const toggleIcon = document.querySelector(".toggle");

  if (document.body.classList.contains("light-mode")) {
    toggleIcon.classList.remove("fa-sun");
    toggleIcon.classList.add("fa-moon");
  } else {
    toggleIcon.classList.remove("fa-moon");
    toggleIcon.classList.add("fa-sun");
  }
}

// ==========================
// SUBJECT DATA
// ==========================
const subjects = {
  st: [
    {
      title: "Basic Electrical and Electronics Engg",
      icon: "fa-bolt",
      color: "yellow",
      slug: "beee"
    },
    {
      title: "Biology for Engineers",
      icon: "fa-microscope",
      color: "pink",
      slug: "biology"
    },
    {
      title: "Engineering Chemistry",
      icon: "fa-flask",
      color: "green",
      slug: "chemistry"
    },
    {
      title: "Environmental Sciences",
      icon: "fa-leaf",
      color: "green",
      slug: "environment"
    },
    {
      title: "Manufacturing Sciences",
      icon: "fa-industry",
      color: "orange",
      slug: "manufacturing"
    },
    {
      title: "Mathematics 2",
      icon: "fa-square-root-variable",
      color: "blue",
      slug: "maths1"
    },
  ],

  mt: [
    {
      title: "Physics",
      icon: "fa-atom",
      color: "blue",
      slug: "physics"
    },
    {
      title: "Engineering Graphics",
      icon: "fa-drafting-compass",
      color: "orange",
      slug: "graphics"
    },
    {
      title: "Programming for Problem Solving",
      icon: "fa-code",
      color: "pink",
      slug: "pps"
    },
    {
      title: "Communication Skills",
      icon: "fa-comments",
      color: "green",
      slug: "communication"
    },
    {
      title: "Engineering Mechanical",
      icon: "fa-screwdriver-wrench",
      color: "yellow",
      slug: "workshop"
    },
    {
      title: "Mathematics 1",
      icon: "fa-square-root-variable",
      color: "blue",
      slug: "maths1"
    },
  ]
};

// ==========================
// RENDER SUBJECTS
// ==========================
const groupSelector = document.getElementById("groupSelector");
const subjectGrid = document.getElementById("subjectGrid");

function renderSubjects(group) {
  subjectGrid.innerHTML = "";

  subjects[group].forEach(subject => {
    const card = document.createElement("a");
    card.className = "card subject-link";
    card.href = `subjects.html?subj=${subject.slug}`;

    card.innerHTML = `
      <div class="icon ${subject.color}">
        <i class="fa-solid ${subject.icon}"></i>
      </div>
      <div class="text">
        <h3>${subject.title}</h3>
        <p>View Resources</p>
      </div>
    `;

    subjectGrid.appendChild(card);
  });
}

// ==========================
// GROUP CHANGE EVENT
// ==========================
groupSelector.addEventListener("change", function () {
  renderSubjects(this.value);
});

// ==========================
// DEFAULT LOAD
// ==========================
renderSubjects("mt");