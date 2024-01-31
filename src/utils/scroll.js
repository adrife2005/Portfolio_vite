// About section
const entriesAbout = document.querySelector(".about .container");
let entryAbout = entriesAbout.querySelector(".about__section");
let entryImg = entriesAbout.querySelector(".about__img");

if (window.innerWidth > 768) {
  // gsap.set(entryAbout, {
  //   xPercent: -100,
  //   opacity: 0,
  // });
  // gsap.set(entryImg, {
  //   xPercent: 100,
  //   opacity: 0,
  // });
  // gsap.to(entryAbout, {
  //   scrollTrigger: {
  //     trigger: entries,
  //     start: "top bottom",
  //     end: "bottom 90%",
  //     scrub: true,
  //   },
  //   xPercent: 0,
  //   opacity: 1,
  // });
  // gsap.to(entryImg, {
  //   scrollTrigger: {
  //     trigger: entries,
  //     start: "top bottom",
  //     end: "bottom 90%",
  //     scrub: true,
  //   },
  //   xPercent: 0,
  //   opacity: 1,
  // });
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: entriesAbout,
      start: "top bottom",
      end: "bottom 90%",
      scrub: true,
    },
  });

  tl.fromTo(
    entryImg,
    { xPercent: 100, opacity: 0 },
    { xPercent: 0, opacity: 1 }
  );
  tl.fromTo(
    entryAbout,
    { xPercent: -100, opacity: 0 },
    { xPercent: 0, opacity: 1 },
    "<"
  );
}

// Proyect section
const entriesProyect = document.querySelector(".proyect .container");
const proyects1 = document.querySelectorAll(".proyect__grid")[0];
const proyects2 = document.querySelectorAll(".proyect__grid")[1];

if (window.innerWidth > 1024) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: entriesProyect,
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
    },
  });

  tl.fromTo(
    proyects1,
    { xPercent: -50, opacity: 0 },
    { xPercent: 0, opacity: 1 }
  );
  tl.fromTo(
    proyects2,
    { xPercent: 50, opacity: 0 },
    { xPercent: 0, opacity: 1 }
  );
}

// Smooth Scroll

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
