import contactUsHTML from "/views/contact-us.js";

// addSnapToDiv(screen.width);
handleHamburgerBtn();
// renderContactUs();
// handleBookingFormSubmit();

function addSnapToDiv(width) {
  const hasSnap = document.querySelectorAll(".has-snap");
  if (width >= 700) {
    hasSnap.forEach((div) => {
      if (!div.classList.contains("snap-div")) {
        div.classList.add("snap-div");
      }
    });
    return;
  }
  hasSnap.forEach((div) => {
    if (div.classList.contains("snap-div")) {
      div.classList.remove("snap-div");
    }
  });
}

function handleHamburgerBtn() {
  const btn = document.querySelector(".nav .hamburger");
  if (btn) {
    btn.onclick = () => {
      const body = document.querySelector("body");
      const nav = document.querySelector(".nav");
      if (nav.classList.contains("open")) {
        body.classList.remove("overflow-hidden");
        nav.classList.remove("open");
      } else {
        body.classList.add("overflow-hidden");
        nav.classList.add("open");
      }
    };
  }
}

function renderContactUs() {
  const contactBtn = document.querySelector(".contact-us-btn");

  if (contactBtn) {
    if (!document.querySelector(".booking-overlay")) {
      const section = document.createElement("section");
      section.classList.add("booking-overlay", "none");
      section.innerHTML = contactUsHTML();
      document.querySelector("body").appendChild(section);
    }

    const closeBtn = document.querySelector(".booking-overlay .btn-close");
    contactBtn.onclick = () => {
      document.querySelector("body").classList.add("overflow-hidden");
      document.querySelector(".booking-overlay").classList.remove("none");
    };

    closeBtn.onclick = () => {
      document.querySelector("body").classList.remove("overflow-hidden");
      document.querySelector(".booking-overlay").classList.add("none");
    };
  }
}

function handleBookingFormSubmit() {
  const form = document.querySelector(".booking-overlay .form");
  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const phone = e.target.phone.value;
      const message = e.target.message.value;
      const consultationType = [];

      for (let i = 0; i < 4; i++) {
        const node = e.target.consultationType[i];

        if (node.checked === true) {
          consultationType.push(node.value);
        }
      }

      console.log({
        name,
        email,
        phone,
        message,
        consultationType,
      });
    };
  }
}
