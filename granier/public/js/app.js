$( document ).ready(function() {
    $('.carousel').carousel({
        interval: 3000
    });

    $('a.scroll').click(function(event){
        event.preventDefault();
        var $section = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: $section.offset().top - 80
        }, 600);
    });
});