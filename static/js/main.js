
/*----------scroll detector---------*/

let headerSection = document.querySelector(".header-section");

document.addEventListener("scroll",()=>{
    if(window.scrollY > 84){
        headerSection.style.position="fixed";
        headerSection.style.top=0;
        
    }else{
        headerSection.style.position="absolute";
        headerSection.style.top="90px";
       
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