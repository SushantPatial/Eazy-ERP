/* Hero type effect */
$(document).ready(function() {
  new Typed('#typed',{
    strings : ['Tally','Busy'],
    typeSpeed : 150,
    backSpeed: 60,
    delaySpeed : 120,
    loop : true
  });
})


/* Video section */
$(window).on("scroll", function() {
  if ($(window).scrollTop() > 1200) {
    $("#header").removeClass('header-scrolled');
  }
  if ($(window).scrollTop() > 3200) {
    $("#header").addClass('header-scrolled');
  }
})

gsap.registerPlugin(ScrollTrigger);

gsap.to(".video", {
  scrollTrigger: {
    trigger: ".video",
    scrub: true,
    pin: true,
    start: "center center",
    end: "bottom -100%",
    toggleClass: "active",
    ease: "power2"
  }
});

gsap.to(".video__video", {
  scrollTrigger: {
    trigger: ".video",
    scrub: 0.5,
    start: "top bottom",
    end: "bottom -300%",
    ease: "power2"
  },
  y: "-30%"
});


// $(document).ready(function() {
//   $(".parallax-video").css("height", $(".parallax-video video").css("height"));
// })
// $(window).on("resize", function() {
//   $(".parallax-video").css("height", $(".parallax-video video").css("height"));
// })

/* Clients slider */
new Swiper('.clients-slider', {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  slidesPerView: 5,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 60
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 80
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 120
    }
  }
});

// Detect scroll to div
function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop;
  return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

/* Testimonials */ 
$('.testimonials-carousel').owlCarousel({
  mouseDrag: false,
  touchDrag: false,
  loop: true,
  margin: 2,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1,
      touchDrag: true
    },
    992: {
      items: 3
    }
  }
});
  
$('.owl-prev').click(function() {
  $active = $('.owl-item .item.show');
  $('.owl-item .item.show').removeClass('show');
  $('.owl-item .item').removeClass('next');
  $('.owl-item .item').removeClass('prev');
  $active.addClass('next');
  if($active.is('.first')) {
    $('.owl-item .last').addClass('show');
    $('.first').addClass('next');
    $('.owl-item .last').parent().prev().children('.item').addClass('prev');
  }
  else {
    $active.parent().prev().children('.item').addClass('show');
    if($active.parent().prev().children('.item').is('.first')) {
      $('.owl-item .last').addClass('prev');
    }
    else {
      $('.owl-item .show').parent().prev().children('.item').addClass('prev');
    }
  }
});
  
$('.owl-next').click(function() {
  $active = $('.owl-item .item.show');
  $('.owl-item .item.show').removeClass('show');
  $('.owl-item .item').removeClass('next');
  $('.owl-item .item').removeClass('prev');
  $active.addClass('prev');
  if($active.is('.last')) {
    $('.owl-item .first').addClass('show');
    $('.owl-item .first').parent().next().children('.item').addClass('prev');
  }
  else {
    $active.parent().next().children('.item').addClass('show');
    if($active.parent().next().children('.item').is('.last')) {
      $('.owl-item .first').addClass('next');
    }
    else {
      $('.owl-item .show').parent().next().children('.item').addClass('next');
    }
  }
});


/* Counts */ 
$(window).scroll(function() {    
  if(isScrolledIntoView($('#counts'))) {
    $('.counting').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
      {
        duration: 3000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });  
    });  
  }    
});

/* Hero */
particlesJS("particles-js-hero",{particles:{number:{value:90,density:{enable:false,value_area:500}},color:{value:"#f1f1f1",},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:3,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:0,mode:"repulse"},resize:!0},modes:{grab:{distance:170,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{hide_card:!1,background_color:"#b61924",background_image:"",background_position:"50% 50%",background_repeat:"no-repeat",background_size:"cover"}});

/* Stats */
particlesJS("particles-js",{particles:{number:{value:120,density:{enable:!0,value_area:500}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{hide_card:!1,background_color:"#b61924",background_image:"",background_position:"50% 50%",background_repeat:"no-repeat",background_size:"cover"}});

/* Parallax Section */
$('#parallax').parallax({
	invertX: true,
	invertY: true
});
particlesJS("particles-js-2", {"particles":{"number":{"value":250,"density":{"enable":true,"value_area":962.0472365193136}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":9},"image":{"src":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT0AAACfCAMAAAC85v7+AAAAyVBMVEX///+bWbbs8PHv8/Tz8/PBwcG9vb2cW7egWrxMQlHAx8jc3NzY2trn4eqVS7KbV7fl6utaW1uZULXL0NHf5ea3scKMYaP0+Pnt7OX3/P3n7O7S19nu8vDi5ufV1tXZ3uGyp77Ozcnf6vO3ta3Ey9C4r6ju9/GzvcPGxsKtrq2or7W9wsvHx8WjpqrN196grrrKy8FQUVGZTLirt7+XmZ6qqqmfp6yoqbW4rqS1xNC6usCcga7Bu7GMSKegnZq5wsOnoqeZnKWYlJHcxxaiAAAKcElEQVR4nO2dfXObuBaHXQjcrtDuanu46xQhaQlKeDF2e6/jpPXNDdn9/h9qJcBgu80Y6j+SyZ4nGZtCM+P5zRFIehCe/TaRnyz/+f6xZ3abAz+9RX77bTYP5h8N8/lH96NjN8yP2TCbzrx5Y3O723HMfzF8/P39+/e/8PYfx0Tf3Wv+6I8P798e//15Nou98nq9yWSdFnB7WRbkMduQW4CNfxcvNeT3aQa52fCX2nUcZ/77r+/e/aKFYIIKxe2u08R/fHj39vjl52LmShUwoeKahjxwuOA8qlQQChoGjnlTPKQiUEKYF6dPD8D78vW6flj/s9O7mDluy9wdRVd7jLGICUewf3h6sc51AnlZaOFlySpfJGWVUbqNb2F586SKIvZ88D1Nae2V1apLb1zN/TPSk0pqL5SVTpTkuTYtN7l3ParjLZAqIiGlJAwqImumu5Y7slJ3Bftm09u1XNfpX0xh2d9+l912uu0mvV//9+9p2D96c9j0XC5VsqIcxjXGJr13v36YxlsMr0nvcvGwfihTXY07hc3fZBn9EIctF9ObRpPeNDC9nua8N42PmN4Om949mcT2/y/9oV8NWHvn0F01mhNae904ee3A815PU3uJNqEEV1Sa4ZeoMb3RNCO1BUsfy+LKv/60yVw/wvTG0tReBZUX+leQ6IQHJdbeaPresrMb4OJ5bzxteqcCw/S+T9Ny6a4zErnsYJM5kStc82t3M9ZemzG9nuaq4WfpOs2C2i9br7GsC3KrobBeAzqvUQL4xeA1EEvTciWlYcDjWipOHR5wYLmSoZBKOlIJBeYwVUKYF6y9A8Z4jcP9mN5AOzNvuirwufRBVItkVWlZgg7oNl7y7c298ouY+OADBJTAtlKYXk+bXmo6esnCV9LXiUp0nnk8yJ9cX2Y3W6j9eKso9xWt6iRjBNPrOZgd7Tp83Vu07zX6A53XQCxtj4WGUqmxtwVgej2911inGrC3PJFuZn6s08D0DkCvcQ44t3wOP+A1MvQaO7D2zmHfa4xwGnjeO6DzGmYoKyIR8PmI/DC9ntZrRHteA9MbT1N7nvZ8VVxBkiUjxhuYXs/eOHd34x6mNxrsLZ9Dk57adUai7gbRdo6lvbUgsl4jsgcj9BpHdF7D/gQkz2B5WfrVpvbhFqDwyngJVb5Na52g1/gOTXrApaKcmWsGB4dLDsLnEIZSgQMqoERyJXkYBhBi7R2AXuMc2tqTIFefM48LqZNVomnNTal58ZLqmzL0/Fh74HEeUIAtoNcYaGZH9fXXhCdZwWWxyE16aelrSp6cQpY39yQr2JZLMEersspEjePcnm+9xo6Y7XmNvYaLXmOgGWsoa75FiF5jKp3X+PSwvv46abUL8q5ruUI4dq2jwLHGRHCkdg44t3wOuF7jHH6g9m6w9nYceg0L3rc8nqb2JDclxSIRKPNGTqf37l9Iw4d2vYa3ab3GdeZ4p9ZrOOEM6bgwteeTouDFFeRZxYO7U+E59KU/8+vh4thrnB5wYHo9F5N7y5jegE1P7GrP2fcaTrdkstEdruv296lhej0mvbhYeJmXBaSq+fKy9KAgPiwBUlLGJa+SRUp0sgXw/fYRNphej00PIFFSiawCXjGeAAl9TkIlOTjmMsK9BJTUQUBbr4HpDVw8Nzs6cOQ1ML0Bmx5ILnmSVUpILVcSAk2VCHVcKLjZCuK5QKSnlKBc1qBcTK8nqGaX+svXfPV5vdGN18hJelcQab1GcnfzRMrNZcklmKNVWa1FhukNBP4zRjIWz3gNbLkDgTez88pBGDGK/b2pmPSs1/iyvs5Geg1Mb8Ck5ypTeEpEI70GpjdgW+5EML0eW3sTwfR6THr1NK9ROy/9mV8PtuVOKz0neOnP/Hpo0sPz3g9iz3u09RrMeg1MbwomvXghkiJrvEY6Yr0Gpjdga88nmw0vrqqHdT7mPipMr2e4aoxdr4HpDWBv+Ry+qb3D3slxbwXTO8BeNR51XleZIEnNl3FZSZ94sIQq1YX1GnKRapA1r3wPvcYRNj0g1SpRos4199gqIb5KuRfShBPX41RuG69BKSUKa++QvbGG80yLRa/xLLbH0iwVSgg05kJJHoD9KheIt4rfLBiAa5pvFZqjihKJXmOPZnb0yzrXn8tHLTfrfJVn6V1Ry/rJWSZ/3jzVd63XeNRQFV4ZoNfYY6/lHnkNhV7jJG1/zxWR44TY35tK5zWu1wV6jek0Vw3KhFIswNqbCs7vnQN6jXNAr3EOJr1oWumh1xj4Zobq5EkQW+6ATc/6DNeJIiHM2+nZZUyvx86xbFXi143X8Ag7+f0amN5A5zUeobiq0k+pDm5PhYfpDXw7t4zpjQe9xjmg1zgHe9XYQKUTIkASXjpZQj1SyZJDDkW85ZXU1msQbh/Uj17jkMZreN4qh6D2CfeFrqzXgK2iHtSuzyWUuVZJTan0FaZ3yN7s6N6Y42D4sTdr6qDXOKC5C8h+d4vU0n4/faCoCrhQjPHYD2m8iLh0KaEgQqaUAhriWGPg2Gs8rPLs4bYgsn6Klp//vHkiy8dLcxKsHjUkhV8GNaY3sNdjGXp6tn3G6jtPYW5WTWJ6Pd15L3bt939hf28irdcordcg6DWm0trwMOA0RK8xmbblTvp+EkyvB73GOZj0pmkNQthLf+bXg0lv7LW2g6HX6Jk+Q4Utd8CmZ7/b1V40ds9Cx6vGWBqvwZOKNF4j0bjiYAo2vYI8/qU3V971p80C05sCrtc4B/Qa5/Cs1/jmrtG+MDG9nua8x6WWXIAEvo21pABAtwok92NfAeU5cAkKfM4xvUNselXmrx4WQZ3WUFyuPa9QKSw5LarMLcB6DcKTTEoo0Aodsec12NBE2X7zPfAamN4+Nr1QiVBJCBgLVRCGoVAsjCIVExHG2qHUDYFCJCIRCqACxxoDrdf4lOvP60eQ6ad89bB+uN1oyHuvcXt5z2V1C9ZrrCnB9AaaJynZJ9kwZn6Z2YhMlTnCEdo1L65gkWP+xaKI2af5my1Mb2DPaxzdevZsxxnT67EtV+fr6wy9xg9gaw+kCjhV+Ay0yXReY9wIF9M7Ar3GOZj0YCLipT/z68GkF7JJhJheD3qNc+jW57q7x6Q7pw0bptfTeA1IEt14DclFges1xtOmV/xFiqvKeo3LO1wrNJ625TLHZU7k2LI7/exWTK8HvcY5nPIajrt3GNM7wp737LICyhkEXJKYU8pBUh0CVZ5DlKQ855xyBZ7CJykd0aS3TVdpFtTX7beue0tewO2KbzzrNSBfpjWvSimTDT7F64g9ryGGoazYb77oNZ6lnVtmIqRcRA4zG3YwZvvMIoaIxcoJQ5fJgDr2KKNhhGONgcFrlNZr3HdegzReI//z5kkvby9L236t1yjWEr3GHs1T+gPWCDPzYzYYC4QwJaddFalYmb2RimxRRkpF1MG1Qnt0573vTI+i1zhN6zWyNPM1eo3JNCtMk5UEiV5jOvtjDUxvKjg7eg6BP1PhJBTOzPcImF1M8xoXL/2RXxEXuHblDC7EbD67QCYzn89ncyZM+QkfmYhnAvQugsCUn/A9ZBqVSY+a9P4GLM7Fh9slUMsAAAAASUVORK5CYII=","width":100,"height":100}},"opacity":{"value":0.4890406785639845,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":1.5,"random":false,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":112.2388442605866,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":2,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":150,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":97.44926547616141,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});