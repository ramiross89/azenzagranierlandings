  // Scroll to the desired section on click
  // Make sure to add the `data-scroll` attribute to your `<a>`          tag.
  // Example: 
  // `<a data-scroll href="#my-section">My Section</a>` will scroll to an element with the id of 'my-section'.

$( document ).ready(function() {
    $('.carousel').carousel({
        interval: 6000
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