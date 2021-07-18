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

// aos();

function aos() {
  const snapDiv = document.querySelector(".snap-container");
  snapDiv.onscroll = throttle(addClass, 100);
}

function addClass() {
  const snapDiv = document.querySelector(".snap-container");
  const nodes = document.querySelectorAll(".has-ani");
  nodes.forEach((node) => {
    const top = node.offsetTop - snapDiv.scrollTop;
    if (top < 200) {
      node.classList.add("ani");
    }
  });
}

function throttle(func, wait) {
  let flag = true;
  return function () {
    if (flag) {
      func();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, wait);
    }
  };
}
