window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  /*------------------lenis---------------*/

  const lenis = new Lenis({ smooth: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time* 10000);
  });

//   gsap.ticker.lagSmoothing(0);

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
    //   markers: true,
    },
    opacity: 0,
    duration: .5,
    yPercent:10
  });


document.querySelectorAll(".description").forEach((el)=>{
    el.style.background = el.dataset.bg;
    el.style.color = el.dataset.color;
})

const revealtl = gsap.timeline({
    delay: 1,
    scrollTrigger: {
        trigger: "#aboutMe",
        start: "top 25%",
        end: "bottom 20%",
        scrub: 2,
        pin: true,
        markers: true,
    },
});


revealtl.to(".first", reveal())
.to(".second", reveal())
.to(".third", reveal())
.to(".fourth", reveal())
.to(".first", hide())
.to(".second", hide())
.to(".third", hide())
.to(".fourth", hide());

function reveal(){
    return{
        duration: 2,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease:"circ.out",
    }
}

function hide(){
    return{
        duration: 2,
        opacity: 0,
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0 100%)",
        ease:"circ.out",
    }
}


});

