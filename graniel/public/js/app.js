$( document ).ready(function() {
    $('.carousel').carousel({
        interval: 3000
    });
    
    function scrollToSection(event) {
        event.preventDefault();
        var $section = $($(this).attr('href')); 
        $('html, body').animate({
            scrollTop: $section.offset().top - 50
        }, 700);
    }
    $('[data-scroll]').on('click', scrollToSection);

    $('.navbar .nav-link').click(function () {
        $('.navbar .nav-link').removeClass('active');
        $(this).addClass('active');
     });
});