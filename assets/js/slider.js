var swiper = new Swiper(".first-slider", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
      delay:3000
    },
    loop:true
  });


  var swiper = new Swiper(".best-seller", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
   
    navigation: {
      nextEl: ".right-ico",
      prevEl: ".left-ico",
    },

    breakpoints:{
      280:{
          slidesPerView:2
          
      },
      
      768:{
         slidesPerView:2
      },
      992:{
          slidesPerView:3
      },
      1200:{
        slidesPerView:4
      }

    }
  });

  var swiper = new Swiper(".latest-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    breakpoints:{
      280:{
          slidesPerView:1
          
      },
      
      768:{
         slidesPerView:2
      },
      992:{
          slidesPerView:2
      },
      1200:{
        slidesPerView:3
      }

    }
  });

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });