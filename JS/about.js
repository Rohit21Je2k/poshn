window.onload = setTestCards;
window.onresize = setTestCards;

testimonialScroll();

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
