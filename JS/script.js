import contactUsHTML from "/views/contact-us.js";

main();

function main() {
  // addSnapToDiv(screen.width);
  aosIntersection();
  handleHamburgerBtn();
  handleContactUs();
}

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
      const snapContainer = document.querySelector(".snap-container");
      const nav = document.querySelector(".nav");
      if (nav.classList.contains("open")) {
        snapContainer.classList.remove("overflow-hidden");
        nav.classList.remove("open");
      } else {
        snapContainer.classList.add("overflow-hidden");
        nav.classList.add("open");
      }
    };
  }
}

function handleContactUs() {
  const contactBtn = document.querySelector(".contact-us-btn");
  if (contactBtn) {
    contactBtn.onclick = () => {
      const bookingForm = document.querySelector(".booking-overlay");
      if (!bookingForm) {
        renderBookingForm();
      }
      handleOpenBookingForm();
      handleCloseBookingForm();
      handleBookingFormInput();
      handleBookingFormSubmit();
    };
  }
}

function renderBookingForm() {
  const section = document.createElement("section");
  section.classList.add("booking-overlay", "none");
  section.innerHTML = contactUsHTML();
  document.querySelector("body").appendChild(section);
}

function handleOpenBookingForm() {
  document.querySelector("body").classList.add("overflow-hidden");
  document.querySelector(".booking-overlay").classList.remove("none");
}

function handleCloseBookingForm() {
  const closeBtns = document.querySelectorAll(".booking-overlay .btn-close");
  closeBtns.forEach((btn) => {
    btn.onclick = () => {
      document.querySelector("body").classList.remove("overflow-hidden");
      document.querySelector(".booking-overlay").classList.add("none");
    };
  });
}

function handleBookingFormInput() {
  const inputFields = document.querySelectorAll(
    ".booking-overlay .form .input-field"
  );

  inputFields.forEach((node) => {
    const parent = node.parentElement;

    node.onfocus = () => {
      if (!parent.classList.contains("focus")) {
        parent.classList.add("focus");
      }
    };

    node.onblur = () => {
      if (parent.classList.contains("focus")) {
        parent.classList.remove("focus");
      }
    };
  });
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
      form.reset();
    };
  }
}

function aosIntersection() {
  const aniNodes = document.querySelectorAll(".has-ani");

  const Observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ani");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  aniNodes.forEach((node) => {
    Observer.observe(node);
  });
}
