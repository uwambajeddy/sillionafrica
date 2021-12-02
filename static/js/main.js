
/*----------scroll detector---------*/

let headerSection = document.querySelector(".second-nav");

document.addEventListener("scroll",()=>{
    if(window.scrollY > 95){
        headerSection.style.position="fixed";
        headerSection.style.top=0;
        
    }else{
        headerSection.style.position="absolute";
        headerSection.style.top="95px";
       
    }
})

/*-----x-----scroll detector----x-----*/

const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 1
    },
    960: {
        items: 1
    }
}

$(document).ready(function () {

    $nav = $('.header-section');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true,
        nav: true,
        /* navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')], */
        responsive: responsive
    });


    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});


function create() {
    let overlay1 = document.querySelector(".overlay");
    let createUpdate = document.querySelector(".create-modal");
    let closebutton1 = document.querySelector(".close-modal");
  
    let closeC = function () {
      createUpdate.classList.add("hidden");
      overlay1.classList.add("hidden");
    };
  
    let openC = function () {
      createUpdate.classList.remove("hidden");
      overlay1.classList.remove("hidden");
    };
    openC();
  
    closebutton1.addEventListener("click", closeC);
    overlay1.addEventListener("click", closeC);
  }