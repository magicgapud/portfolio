window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  /*------------------lenis---------------*/

//   const lenis = new Lenis({ smooth: true });
//   lenis.on("scroll", ScrollTrigger.update);
//   gsap.ticker.add((time) => {
//     lenis.raf(time * 1000);
//   });

  gsap.ticker.lagSmoothing(0);

  // let tl = gsap.timeline({

  //     scrollTrigger:{
  //         trigger: '#home',
  //         pin: true,
  //         start: 40% top,
  //         end: '+=500px',
  //         scrub: 1,
  //         markers: true,
  //     }

  // });

  gsap.to("#home-wrapper", {
    scrollTrigger: {
      trigger: "#home",
      pin: true,
      pinSpacing: false,
      start: 40 % top,
      end: "+=300px",
      scrub: 1.5,
      markers: true,
    },
    opacity: 0,
    duration: .5,
    yPercent:10
  });

});
