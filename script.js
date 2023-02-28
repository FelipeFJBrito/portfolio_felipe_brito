$(document).ready(function(){
    $('.carousel').owlCarousel({
        margin:50,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });

    var typed = new Typed(".lead", {
        strings:["Software Developer 💻", "Computer Engineer 🎓"],
        typeSpeed:80,
        backSpeed:60,
        loop:true
    });

});