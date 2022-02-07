$(window).on('scroll', function() {
  if ($(window).scrollTop() > 1200 && $(window).scrollTop() < 4000) {
    $("#header").removeClass("header-scrolled");
  } else {
    $("#header").addClass("header-scrolled");
  }
})

// gsap.registerPlugin(ScrollTrigger);

// gsap.to("#line", {
//   scrollTrigger: {
//     trigger: '.what-we-do',
//     start: 'center',
//     markers: true,
//   },
//   duration: 1,
//   scaleY: 1, 
//   transformOrigin: "top center"
// })

// gsap.to("#line", {
//   scrollTrigger: {
//     trigger: '.what-we-do',
//     start: 'center',
//     markers: true,
//   },
//   duration: 1,
//   delay: 1,
//   css: {
//     right: '33.33%',
//   }
// })

// gsap.to(".left-side", {
//   scrollTrigger: {
//     trigger: '.what-we-do',
//     start: 'center',
//     markers: true,
//   },
//   duration: 1,
//   delay: 2,
//   css: {
//     right: 0
//   }
// })
// gsap.to(".right-side", {
//   scrollTrigger: {
//     trigger: '.what-we-do',
//     start: 'center',
//     markers: true,
//   },
//   duration: 1,
//   delay: 2,
//   css: {
//     left: 0
//   }
// })


// const sections = gsap.utils.toArray('.sections');

// sections.forEach((section,i)=>{
  
//   const modules = gsap.utils.toArray('.module', section);
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: section,
//       start: "center center",
//       end: "+=300%",
//       scrub: 2,
//       pin: true,
//     }
//   });
  
//   modules.forEach((module,i)=>{
    
//     // fade in the panels element
//     tl.to(gsap.utils.toArray('.right-side', module), {autoAlpha: 1}, "<")
    
//     const panels2 = gsap.utils.toArray('.panel-2', module);
    
//     panels2.forEach((panel, i)=>{
//       // first panel should start already in place, and last panel should end in the center.
//       tl.fromTo(panel, { 
//         yPercent: i ? 100 : 0
//       },{
//         yPercent: i === panels2.length - 1 ? 0 : -100,
//         duration: i === 0 || i === panels2.length - 1 ? 0.5 : 1,
//         ease: "none",
//       }, "-=0.5");
//     });
//     tl.to({}, {duration: 1}); // add some extra space at the end so the last panel sits for a bit before unpinning.

//   });
// });

// arrow animations



var $slider = $('.slideshow .slider'),
  maxItems = $('.item', $slider).length,
  dragging = false,
  tracking,
  rightTracking;

$sliderRight = $('.slideshow').clone().addClass('slideshow-right').appendTo($('.split-slideshow'));

rightItems = $('.item', $sliderRight).toArray();
reverseItems = rightItems.reverse();
$('.slider', $sliderRight).html('');
for (i = 0; i < maxItems; i++) {
  $(reverseItems[i]).appendTo($('.slider', $sliderRight));
}

$slider.addClass('slideshow-left');
$('.slideshow-left').slick({
  vertical: true,
  verticalSwiping: true,
  arrows: false,
  infinite: false,
  dots: true,
  speed: 1000,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  $('.slideshow-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
  $('.slideshow-text').slick('slickGoTo', nextSlide);
})
// .on("mousewheel", function(event) {
//   event.preventDefault();
//   if (event.deltaX > 0 || event.deltaY < 0) {
//     $(this).slick('slickNext');
//   } else if (event.deltaX < 0 || event.deltaY > 0) {
//     $(this).slick('slickPrev');
//   };
// }).on('mousedown touchstart', function(){
//   dragging = true;
//   tracking = $('.slick-track', $slider).css('transform');
//   tracking = parseInt(tracking.split(',')[5]);
//   rightTracking = $('.slideshow-right .slick-track').css('transform');
//   rightTracking = parseInt(rightTracking.split(',')[5]);
// }).on('mousemove touchmove', function(){
//   if (dragging) {
//     newTracking = $('.slideshow-left .slick-track').css('transform');
//     newTracking = parseInt(newTracking.split(',')[5]);
//     diffTracking = newTracking - tracking;
//     $('.slideshow-right .slick-track').css({'transform': 'matrix(1, 0, 0, 1, 0, ' + (rightTracking - diffTracking) + ')'});
//   }
// }).on('mouseleave touchend mouseup', function(){
//   dragging = false;
// });

$('.slideshow-right .slider').slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: false,
  speed: 950,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  initialSlide: maxItems - 1
});
$('.slideshow-text').slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: false,
  speed: 900,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
});

