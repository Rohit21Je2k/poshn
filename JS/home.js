const snapDiv = document.querySelector(".snap-container");
const aboutSection = document.querySelector(".about-me");

// snapDiv.onscroll = () => {
//   // snapDiv.scrollTo({
//   //   top: 700,
//   //   behavior: "smooth",
//   // });
//   // aboutSection.scrollIntoView();
//   const aboutTop = aboutSection.getBoundingClientRect().top;

//   if (aboutTop < 20) {
//     setTimeout(() => {
//       aboutSection.classList.add("appear");
//     }, 0);
//   }
// };

const options = { threshold: 0.6 };

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("appear");
      }, 0);
      return;
    }
  });
}, options);

observer.observe(aboutSection);

// const mutObserver = new MutationObserver((mutations) => {
//   console.log(mutations);
//   mutations.forEach((mutation) => {
//     console.log(mutation);
//   });
// });

// mutObserver.observe(aboutSection, {
//   attributes: true,
// });
