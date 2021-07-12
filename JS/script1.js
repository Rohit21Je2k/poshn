// window.onresize = setTestCards;

// window.onload = setTestCards;

const form = document.querySelector(".booking .form");
if (form) {
  form.onsubmit = (e) => {
    e.preventDefault();
  };
}

function inputFieldFocus() {
  const fields = document.querySelectorAll(".booking .input-field");
  fields.forEach((input) => {
    const parent = input.parentNode;
    const sibling = parent.children[0];

    input.onfocus = () => {
      if (parent && !parent.classList.contains("border-orange")) {
        parent.classList.add("border-orange");
      }
      if (sibling && sibling.classList.contains("icon-grey")) {
        sibling.classList.remove("icon-grey");
        sibling.classList.add("icon-orange");
      }
    };

    input.onblur = () => {
      if (parent && parent.classList.contains("border-orange")) {
        parent.classList.remove("border-orange");
      }
      if (sibling && sibling.classList.contains("icon-orange")) {
        sibling.classList.remove("icon-orange");
        sibling.classList.add("icon-grey");
      }
    };
  });
}

// inputFieldFocus();

function openOverlay() {
  const btn = document.querySelector(".btn-overlay");
  btn.onclick = () => {
    const body = document.querySelector("body");
    body.classList.add("overflow-none");
    const overlay = document.querySelector(".booking-overlay");
    if (overlay.classList.contains("none")) {
      overlay.classList.remove("none");
    }
  };
}

function closeOverlay() {
  const btn = document.querySelector(".btn-close");
  btn.onclick = () => {
    const body = document.querySelector("body");
    if (body.classList.contains("overflow-none")) {
      body.classList.remove("overflow-none");
    }
    const overlay = document.querySelector(".booking-overlay");
    if (!overlay.classList.contains("none")) {
      overlay.classList.add("none");
    }
  };
}

// openOverlay();
// closeOverlay();

function hamburger() {
  const btn = document.querySelector(".nav-hamburger");
  btn.onclick = () => {
    const body = document.querySelector("body");
    if (body.classList.contains("overflow-none")) {
      body.classList.remove("overflow-none");
    } else {
      body.classList.add("overflow-none");
    }
    const overlay = document.querySelector(".nav-overlay");
    const menu = document.querySelector(".header-menu-mobile");
    if (btn.classList.contains("open")) {
      btn.classList.remove("open");
      overlay.classList.remove("open");
      menu.classList.remove("open");
      return;
    }
    btn.classList.add("open");
    overlay.classList.add("open");
    menu.classList.add("open");
  };
}

// hamburger();
