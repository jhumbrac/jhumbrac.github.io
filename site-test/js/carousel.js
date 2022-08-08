console.clear();

$(function() {
  $(".carousel").each(function() { 
    initCarousel($(this));
  });  
})

function initCarousel(carousel) {  
  // Carousel settings
  let speed = carousel.attr("data-speed") || .5,
      slides = carousel.find(".carousel-item");
  let numSlides = slides.length,
      numShow = carousel.attr("data-slides") || 1,
      numScroll = carousel.attr("data-scroll") || 1,
      direction = carousel.attr("data-direction") || "x";
  if (direction !== "x") direction = "y";    
  let percent = direction + "Percent"; //xPercent or yPercent
  
  if (numSlides == numShow) {
    carousel.append(slides.first().clone());
    slides = carousel.find(".carousel-item");
    numSlides = slides.length;
  }

  // Width or height based on how many slides to show at a time.
  // Set the x or y percent of each slide
  let options = {};
  options[direction === "x" ? "width" : "height"] = 100/numShow + "%"; 
  options[percent] = i => i * 100;  
  gsap.set(slides, options);    

  // Each slide size and wrap size.
  let size = direction === "x" ? slides.width() : slides.height();
  let entireSize = size * numSlides;  

  // Slides animation settings
  options = {
    ease: "none",
    paused: true,
    repeat: -1,
    modifiers: {}
  };
  options[percent] = "+=" + (numSlides * 100);  
  // This is the infinite loop
  options.modifiers[percent] = gsap.utils.unitize( gsap.utils.wrap( -100, (numSlides-1) * 100 ) );

  // Animation setups
  let animation = gsap.to(slides, speed, options);
  let proxyAnimation = gsap.to({}, .1, {});

  // Proxy for dragging
  let proxy = document.createElement("div");
  options = {};
  options[direction] = snap;
  let draggable = new Draggable(proxy, {
    trigger: carousel,
    onDrag: updateProgress,
    allowContextMenu: true,
    onThrowUpdate: updateProgress,    
    snap: options    
  });
  
  // Next and prev function
  function animateSlides(dir) {    
    if (gsap.isTweening(proxy) || gsap.isTweening(slides)) return;

    proxyAnimation.kill();    
    let x = snap(transform() + dir * size * numScroll);         

    options = {
      onUpdate: updateProgress,
      onComplete: () => gsap.data = {clicked: false}
    };
    options[direction] = x;        
    proxyAnimation = gsap.to(proxy, speed, options);
  }
  
  // Allows drag to move slides
  function updateProgress() {    
    animation.progress(gsap.utils.wrap(0, 1, transform() / entireSize));       
  }
  
  // Helper functions
  function snap(x) {
    return Math.round(x / size) * size;
  }
  function transform() {
    return gsap.getProperty(proxy, direction);    
  }

  // Controls
  carousel.parent().find(".carousel-action").on("click tap", function() {
    animateSlides($(this).attr("data-action") !== "next" ? 1 : -1);    
  });  
  
  // Jump to this slide when clicked
  $(".carousel-item .cta").on("click tap", function() {
    let x = gsap.getProperty(this, "transform");
    x = x.split(") ").find(el => el.includes("translate("));
    
    if (x) {
      x = x.slice("translate(".length, -1).split(",");
      x.forEach((el, i) => x[i] = el.replace(/%|px/, " ").trim());      
            
      x = x[direction === "x" ? 0 : 1];
      x = gsap.utils.snap(100, x);
      
      if (x == 0) {
        animateSlides(1);        
      }
      else if (x == (numShow-1) * 100) {
        animateSlides(-1);
      }
      else return;
    }        
  });
}