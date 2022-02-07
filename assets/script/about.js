$(window).on('scroll', function() {
  if ($(window).scrollTop() > 1200 && $(window).scrollTop() < 4000) {
    $("#header").removeClass("header-scrolled");
  } else {
    $("#header").addClass("header-scrolled");
  }
})

gsap.registerPlugin(ScrollTrigger);

gsap.to("#line", {
  scrollTrigger: {
    trigger: '.what-we-do',
    start: 'center',
    markers: true,
  },
  duration: 1,
  scaleY: 1, 
  transformOrigin: "top center"
})

gsap.to("#line", {
  scrollTrigger: {
    trigger: '.what-we-do',
    start: 'center',
    markers: true,
  },
  duration: 1,
  delay: 1,
  css: {
    right: '33.33%',
  }
})

gsap.to(".left-side", {
  scrollTrigger: {
    trigger: '.what-we-do',
    start: 'center',
    markers: true,
  },
  duration: 1,
  delay: 2,
  css: {
    right: 0
  }
})
gsap.to(".right-side", {
  scrollTrigger: {
    trigger: '.what-we-do',
    start: 'center',
    markers: true,
  },
  duration: 1,
  delay: 2,
  css: {
    left: 0
  }
})

const sections = gsap.utils.toArray('.sections');

sections.forEach((section,i)=>{
  
  const modules = gsap.utils.toArray('.module', section);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "center center",
      end: "+=300%",
      scrub: 2,
      pin: true,
    }
  });
  
  modules.forEach((module,i)=>{
    
    // fade in the panels element
    tl.to(gsap.utils.toArray('.panels', module), {autoAlpha: 1}, "<")
    
    const panels = gsap.utils.toArray('.panel', module);
    
    panels.forEach((panel, i)=>{
      // first panel should start already in place, and last panel should end in the center.
      tl.fromTo(panel, { 
        yPercent: i ? 100 : 0
      },{
        yPercent: i === panels.length - 1 ? 0 : -100,
        duration: i === 0 || i === panels.length - 1 ? 0.5 : 1,
        ease: "none",
      }, "-=0.5");
    });
    tl.to({}, {duration: 1}); // add some extra space at the end so the last panel sits for a bit before unpinning.

  });
});

