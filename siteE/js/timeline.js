let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "header",
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=200", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }
  });
let logo = document.querySelector('.logo')
tl.to(logo, {width: "10em"})