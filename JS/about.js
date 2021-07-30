about();

window.onresize = setTestCardsMargin;

function about() {
  setTestCardsMargin();
  testimonialScroll();
}

function setTestCardsMargin() {
  const textCards = document.querySelector(".test-cards");
  const wrapper = document.querySelector(".testimonial .wrapper");
  const marginLeft = wrapper.offsetLeft + 20; // 20 is wrapper padding
  console.log(marginLeft);
  textCards.style.marginLeft = marginLeft + "px";
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
