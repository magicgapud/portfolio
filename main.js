gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray("#container .section");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#container",
    pin: true,
    scrub: 1,
    snap: {
      snapTo: 1 / (sections.length - 1), // snap by increments
      duration: 0.1, // snap duration
      ease: "power1.inOut",
    },
    end: () => "+=" + document.querySelector("#container").offsetWidth
  }
});
