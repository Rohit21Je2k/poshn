about();
window.onresize = setTestCards;

function about() {
  setTestCards();
  testimonialScroll();
  aosIntersection();
}

function setTestCards() {
  const div = document.querySelector(".testimonial .wrapper");
  if (div) {
    const left = div.offsetLeft < 20 ? 20 : div.offsetLeft;
    const testCards = document.querySelector(".test-cards");
    testCards.style.paddingLeft = left + "px";
  }
}

function testimonialScroll() {
  const prev = document.querySelector(".btn-prev");
  const next = document.querySelector(".btn-next");
  const cards = document.querySelector(".test-cards");
  const scrollAmount = document.querySelector(".test-card").offsetWidth;

  prev.onclick = () => {
    cards.scrollLeft -= scrollAmount;
  };

  next.onclick = () => {
    cards.scrollLeft += scrollAmount;
  };
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
