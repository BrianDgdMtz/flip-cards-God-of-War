$(document).ready(function(){
    var personajes = $('#personajes').offset().top,
        armas = $('#armas').offset().top;

    $('#btn-personajes').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: personajes - 70
        }, 500);
    });

    $('#btn-armas').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: armas - 55
        }, 500);
    });

});