const snapDiv = document.querySelector(".snap-container");
const aboutSection = document.querySelector(".about-me");

snapDiv.onscroll = throttle(aos, 100);

function aos() {
  console.log("hi");
  const aboutTop = aboutSection.getBoundingClientRect().top;
  if (aboutTop < window.innerHeight / 2) {
    document
      .querySelector(".about-me .content .img-container .img")
      .classList.add("appear");
    document.querySelector(".about-me .text").classList.add("appear");
    return false;
  }
  return true;
}

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       document
//         .querySelector(".about-me .content .img-container .img")
//         .classList.add("appear");
//       document.querySelector(".about-me .text").classList.add("appear");
//     }
//   });
// });

// observer.observe(aboutSection, {
//   threshold: 0.6,
// });

function throttle(func, wait) {
  let flag = true;
  return function () {
    if (flag) {
      const r = func();
      flag = false;
      if (r) {
        setTimeout(() => {
          flag = true;
        }, wait);
      }
    }
  };
}
