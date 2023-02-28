$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.line#secret1').click(function(event) {
        $('.line#secret1').toggleClass('active_line');
    });
    $('.line#secret2').click(function(event) {
        $('.line#secret2').toggleClass('active_line');
    });
});
