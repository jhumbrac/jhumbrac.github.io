let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "header",
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=200", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    },
    scrollTrigger: {
        trigger: ".underline",
        start: "bottom bottom",
        scrub: 1,
    }
  });
let logo = document.querySelector('.logo');
let underline = document.querySelectorAll('.underline:after');
tl.to(logo, {width: "10em"})
tl.from(underline, {
    translateX: 32,
    onUpdate: function() {
        console.log('trigger is working');
    }
})