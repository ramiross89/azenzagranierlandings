$( document ).ready(function() {
    $('.carousel').carousel({
        interval: 3000
    });
    
    function scrollToSection(event) {
        event.preventDefault();
        var $section = $($(this).attr('href')); 
        $('html, body').animate({
            scrollTop: $section.offset().top - 20
        }, 300);
    }
    $('[data-scroll]').on('click', scrollToSection);
});