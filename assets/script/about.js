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

// $('.slideshow-right .slider').slick({
//   swipe: false,
//   vertical: true,
//   arrows: false,
//   infinite: false,
//   speed: 950,
//   cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
//   initialSlide: maxItems - 1
// });
// $('.slideshow-text').slick({
//   swipe: false,
//   vertical: true,
//   arrows: false,
//   infinite: false,
//   speed: 900,
//   cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
// });



let activeIndex = 0
let limit = 0
let disabled = false
let $stage
let $controls
let canvas = false

const SPIN_FORWARD_CLASS = 'js-spin-fwd'
const SPIN_BACKWARD_CLASS = 'js-spin-bwd'
const DISABLE_TRANSITIONS_CLASS = 'js-transitions-disabled'
const SPIN_DUR = 1000
const arr = ['2017', '2018', '2019', '2020']

const appendControls = () => {
  for (let i = 0; i < limit; i++) {
    $('.carousel__control').append(`<a href="#" data-index="${i}">` + arr[i] + `</a>`)
  }

  $controls = $('.carousel__control').children()
  $controls.eq(activeIndex).addClass('active')
}

const setIndexes = () => {
    $('.spinner').children().each((i, el) => {
        $(el).attr('data-index', i)
        limit++
    })
}

const duplicateSpinner = () => {
    const $el = $('.spinner').parent()
    const html = $('.spinner').parent().html()
    $el.append(html)
    $('.spinner').last().addClass('spinner--right')
    $('.spinner--right').removeClass('spinner--left')
}

const paintFaces = () => {
    $('.spinner__face').each((i, el) => {
        const $el = $(el)
        let color = $(el).attr('data-bg')
        $el.children().css('backgroundImage', `url(${getBase64PixelByColor(color)})`)
    })
}

const getBase64PixelByColor = (hex) => {
    if (!canvas) {
        canvas = document.createElement('canvas')
        canvas.height = 1
        canvas.width = 1
    }
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = hex
        ctx.fillRect (0, 0, 1, 1)
        return canvas.toDataURL()
    }
    return false
}

const prepareDom = () => {
    setIndexes()
    paintFaces()
    duplicateSpinner()
    appendControls()
}

const spin = (inc = 1) => {
    if (disabled) return
    if (!inc) return
    activeIndex += inc
    disabled = true

    if (activeIndex >= limit) {
        activeIndex = 0
    }
  
    if (activeIndex < 0) {
        activeIndex = (limit - 1)
    }

    const $activeEls = $('.spinner__face.js-active')
    const $nextEls = $(`.spinner__face[data-index=${activeIndex}]`)
    $nextEls.addClass('js-next')
  
    if (inc > 0) {
      $stage.addClass(SPIN_FORWARD_CLASS)
    } else {
      $stage.addClass(SPIN_BACKWARD_CLASS)
    }
    
    $controls.removeClass('active')
    $controls.eq(activeIndex).addClass('active')
  
    setTimeout(() => {
        spinCallback(inc)
    }, SPIN_DUR, inc)
}

const spinCallback = (inc) => {
    
    $('.js-active').removeClass('js-active')
    $('.js-next').removeClass('js-next').addClass('js-active')
    $stage
        .addClass(DISABLE_TRANSITIONS_CLASS)
        .removeClass(SPIN_FORWARD_CLASS)
        .removeClass(SPIN_BACKWARD_CLASS)
  
    $('.js-active').each((i, el) => {
        const $el = $(el)
        $el.prependTo($el.parent())
    })
    setTimeout(() => {
        $stage.removeClass(DISABLE_TRANSITIONS_CLASS)
        disabled = false
    }, 100)

}

const attachListeners = () => {
  
    document.onkeyup = (e) => {
        switch (e.keyCode) {
            case 38:
                spin(-1)
                break
            case 40:
                spin(1)
                break
            }
    }
 
    $controls.on('click', (e) => {
      e.preventDefault()
      if (disabled) return
      const $el = $(e.target)
      const toIndex = parseInt($el.attr('data-index'), 10)
      spin(toIndex - activeIndex)
      
    })
}

const assignEls = () => {
    $stage = $('.carousel__stage')
}

const init = () => {
    assignEls()
    prepareDom()
    attachListeners()
}


$(() => {
    init();
});