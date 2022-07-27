//Menu
$('.hamburger-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu-container').addClass('visible');
}
)
$('.close-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu-container').removeClass('visible');
}
)
// Slideshow
$('.slide-nav').on('click', function(e) {
    e.preventDefault();
    // get current data-slide
    var currentNum = $('.banner-active').data('slide');
    // get data-slide being clicked
    var nextNum = $(this).data('slide');

    // change the button color when clicked
    $('.slide-nav').removeClass('active');
    $(this).addClass('active');

    // change the banner image when another button is clicked
    if (currentNum === nextNum) 
    {
        return false;
    } 
    else 
    {
        $('.banner').removeClass('banner-active');
        $('.banner[data-slide=' + nextNum + ']').addClass('banner-active');

        $('.text').removeClass('banner-active');
        $('.text[data-slide=' + nextNum + ']').addClass('banner-active');
    }
});

//Get current date to display. Source: https://stackoverflow.com/questions/6982692/how-to-set-input-type-dates-default-value-to-today
Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

document.getElementById('to-date').value = new Date().toDateInputValue(); //Pure JS

$(document).ready( function() {
    $('#from-date').val(new Date().toDateInputValue());
}); //jQuery

